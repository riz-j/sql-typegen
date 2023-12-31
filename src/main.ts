import postgres from "postgres";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { data_type_dictionary } from "./common/data-type-dictionary";
import { capitalizeFirstLetter, getArgvValue, singularize } from "./common/common";

// console.log(process.argv);S

// const CONNECTION_STRING: string = "postgresql://admin:newpassword@localhost:5433/postgres";
const CONNECTION_STRING: string = getArgvValue(process.argv, "--database");
const TABLE_NAME: string = getArgvValue(process.argv, "--table");

//  postgresql://admin:newpassword@localhost:5433/postgres
interface DbOptions {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string
}

const parse_db_connection_url = (db_connection_url: string): E.Either<Error, DbOptions>  => {
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

const dbOptions: DbOptions = pipe(
    CONNECTION_STRING,
    parse_db_connection_url,
    E.fold(
        (error: Error) => { console.log(error); process.exit(1); },
        (dbOptions: DbOptions) => dbOptions
    )
);

const sql = postgres(dbOptions);

const result = await sql`
    SELECT * FROM countries;
`;

interface ColumnSchema {
    column_name: String,
    data_type: String,
    is_nullable: "NO" | "YES",
}

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

const datatypeitem = table_schema[3].data_type as string; 
// console.log(table_schema);


// const singularize = (word: string): string => {
//     return singular(word)
// }


const interface_name = pipe(
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

// console.log(table_schema);