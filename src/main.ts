import postgres from "postgres";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { data_type_dictionary } from "@/common/data-type-dictionary";
import { capitalizeFirstLetter, getArgvValue, singularize } from "@/common/common";
import { ColumnSchema, PostgresDbOptions } from "@/models/db";

const CONNECTION_STRING: string = getArgvValue(process.argv, "--database");
const TABLE_NAME: string = getArgvValue(process.argv, "--table");

const parse_db_connection_url = (db_connection_url: string): E.Either<Error, PostgresDbOptions>  => {
    try {
        const url = new URL(db_connection_url);

        const host = url.hostname;
        const port = parseInt(url.port);
        const database = url.pathname.split("/")[1];
        const username = url.username;
        const password = url.password;

        return E.right({ host, port, database, username, password });

    } catch (error) {
        return E.left(new Error(JSON.stringify(error)));
    }
}

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

console.log(`interface ${interface_name} {`)
table_schema.map(item => {
    console.log(`   ${item.column_name}: ${data_type_dictionary[item.data_type as string]};`)
});
console.log(`}`)

process.exit(0);
