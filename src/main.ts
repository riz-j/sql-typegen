import postgres from "postgres";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { pg_data_type } from "@/maps/pg-data-type";
import { 
    singularize,
    format_message, 
    get_argv_value, 
    capitalize_first_letter,
    snake_case_to_kebab_case,
    snake_case_to_camel_case
} from "@/functions/common";
import { PgColumnSchema, PgDbOptions } from "@/models/db";
import { parse_db_connection_url } from "@/functions/db";
import { writeFileSync, mkdirSync } from "fs";
import { generate_interface_line, wrap_interface } from "@/functions/interface";
import { get_postgres_schema } from "@/functions/schema";

// Constants from command-line arguments
const CONNECTION_STRING: Readonly<string> = pipe(get_argv_value(process.argv, "--database"), E.fold(
    () => { console.log(format_message("The --database tag is not provided", "ERROR")); process.exit(1); },
    (result: string) => result
));
const TABLE_NAME: Readonly<string> = pipe(get_argv_value(process.argv, "--table"), E.fold(
    () => { console.log(format_message("The --table tag is not provided", "ERROR")); process.exit(1); },
    (result: string) => result
));
const OUTDIR: Readonly<string> = pipe(get_argv_value(process.argv, "--outdir"), E.fold(
    () => ".",
    (result: string) => result
));


// Generate Database Pool
const db_options: PgDbOptions = pipe(CONNECTION_STRING, parse_db_connection_url, E.fold(
    (error: Error) => { console.log(format_message("FAILED GENERATING DB_OPTIONS\n\n" + error.message, "ERROR")); process.exit(1); },
    (result: PgDbOptions) => result
));
const pg_pool = postgres(db_options);


// Fetch schema details for the specified table
const table_schema: PgColumnSchema[] = pipe(await get_postgres_schema(pg_pool, TABLE_NAME), E.fold(
    (error: Error) => { console.log(format_message(error.message, "ERROR")); process.exit(1); },
    (result: PgColumnSchema[]) => result
));


// Generate TypeScript interface from the table schema
const interface_name: string = pipe(
    TABLE_NAME,
    singularize,
    snake_case_to_camel_case,
    capitalize_first_letter
);
const interface_lines: string = "\t" + table_schema.map(({column_name, data_type, is_nullable}) => 
    generate_interface_line(
        column_name as string, 
        pg_data_type[data_type.split(" ")[0] as string],
        is_nullable === "YES"
    )
).join("\n\t");

const result: string = wrap_interface(interface_name, interface_lines);


// Create output directory (if it doesn't exist) and write the resulting TS interface file
if (OUTDIR !== ".") { mkdirSync(OUTDIR, { recursive: true }); }
const file_name: string = (pipe(TABLE_NAME, singularize, snake_case_to_kebab_case) + ".ts");
writeFileSync(`${OUTDIR}/${file_name}`, result);


// Notify of successful completion and exit
console.log(format_message(`${file_name} has been generated`, "SUCCESS"));
process.exit(0);
