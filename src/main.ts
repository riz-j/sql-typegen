import postgres from "postgres";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { pg_data_type } from "@/maps/pg-data-type";
import { capitalize_first_letter, get_argv_value, singularize } from "@/functions/common";
import { PgColumnSchema, PgDbOptions } from "@/models/db";
import { parse_db_connection_url } from "@/functions/db";
import { writeFileSync } from "fs";
import { generate_interface_line, wrap_interface } from "@/functions/interface";
import { get_postgres_schema } from "./functions/schema";

// Constants for command-line arguments
const CONNECTION_STRING: string = pipe(get_argv_value(process.argv, "--database"), E.fold(
    () => { console.log("ERROR: the --database tag is not provided"); process.exit(1); },
    (result: string) => result
));
const TABLE_NAME: string = pipe(get_argv_value(process.argv, "--table"), E.fold(
    () => { console.log("ERROR: the tag --table is not provided"); process.exit(1); },
    (result: string) => result
));
const OUTDIR: string = pipe(get_argv_value(process.argv, "--outdir"), E.fold(
    () => ".",
    (result: string) => result
));

console.log("OUTDIR IS: ", OUTDIR)

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
const interface_name: string = pipe(TABLE_NAME, singularize, capitalize_first_letter);
const interface_lines: string = "\t" + table_schema.map(({column_name, data_type, is_nullable}) => 
    generate_interface_line(
        column_name as string, 
        pg_data_type[data_type as string], 
        is_nullable === "YES"
    )
).join("\n\t");

const result: string = wrap_interface(interface_name, interface_lines);

writeFileSync(`${OUTDIR}/${file_name}`, result);
console.log(`\n\n  SUCCESS: ${file_name} has been generated\n`);
process.exit(0);
