import postgres from "postgres";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { data_type_map } from "@/maps/data-type-map";
import { capitalizeFirstLetter, getArgvValue, singularize } from "@/functions/common";
import { PgColumnSchema, PgDbOptions } from "@/models/db";
import { parse_db_connection_url } from "@/functions/db";
import { writeFileSync } from "fs";
import { generate_interface_line, wrap_interface } from "@/functions/interface";
import { get_postgres_schema } from "./functions/schema";

// Constants for command-line arguments
const CONNECTION_STRING: string = getArgvValue(process.argv, "--database");
const TABLE_NAME: string = getArgvValue(process.argv, "--table");

const db_options: PgDbOptions = pipe(CONNECTION_STRING, parse_db_connection_url, E.fold(
    (error: Error) => { console.log("ERROR GENERATING DB_OPTIONS", error); process.exit(1); },
    (result: PgDbOptions) => result
));

const PG_POOL = postgres(db_options);

const table_schema: PgColumnSchema[] = pipe(await get_postgres_schema(PG_POOL, TABLE_NAME), E.fold(
    (error: Error) => { console.log("ERROR GENERATING SCHEMA", error.message); process.exit(1); },
    (result: PgColumnSchema[]) => result
));

const file_name: string = (pipe(TABLE_NAME, singularize) + ".ts");
const interface_name: string = pipe(TABLE_NAME, singularize, capitalizeFirstLetter);
const interface_lines: string = "\t" + table_schema.map(({column_name, data_type, is_nullable}) => 
    generate_interface_line(
        column_name as string, 
        data_type_map[data_type as string], 
        is_nullable === "YES"
    )
).join("\n\t");

const result: string = wrap_interface(interface_name, interface_lines);

writeFileSync(`./${file_name}`, result);
console.log(`\n\n  SUCCESS: ${file_name} has been generated\n`);
process.exit(0);
