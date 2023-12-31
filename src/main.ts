import postgres from "postgres";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { data_type_dictionary } from "@/functions/data-type-dictionary";
import { capitalizeFirstLetter, getArgvValue, singularize } from "@/functions/common";
import { ColumnSchema, PostgresDbOptions } from "@/models/db";
import { parse_db_connection_url } from "@/functions/db";
import { writeFileSync } from "fs";

const CONNECTION_STRING: string = getArgvValue(process.argv, "--database");
const TABLE_NAME: string = getArgvValue(process.argv, "--table");

const dbOptions: PostgresDbOptions = pipe(
    CONNECTION_STRING,
    parse_db_connection_url,
    E.fold(
        (error: Error) => { console.log(error); process.exit(1); },
        (dbOptions: PostgresDbOptions) => dbOptions
    )
);

const sql = postgres(dbOptions);

const table_schema = await sql`
    SELECT
        column_name,
        data_type,
        is_nullable    
    FROM
        information_schema.columns
    WHERE
        table_name = ${TABLE_NAME}
    ORDER BY
        ordinal_position;
` as Array<ColumnSchema>

const interface_name: string = pipe(
    TABLE_NAME,
    singularize,
    capitalizeFirstLetter
);


let content = "";
content += `export interface ${interface_name} {`;
table_schema.map(item => {
    content += `\n\t${item.column_name}: ${data_type_dictionary[item.data_type as string]};`
});
content += "\n}"

writeFileSync(`./bindings/${pipe(TABLE_NAME, singularize)}.ts`, content);

console.log(content);

// console.log(`export interface ${interface_name} {`)
// table_schema.map(item => {
//     console.log(`   ${item.column_name}: ${data_type_dictionary[item.data_type as string]};`)
// });
// console.log(`}`)

process.exit(0);
