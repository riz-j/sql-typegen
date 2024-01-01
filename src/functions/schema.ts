import * as E from "fp-ts/Either";
import { PgColumnSchema } from "@/models/db";
import postgres from "postgres";

export const get_postgres_schema = async (
    pg_pool: postgres.Sql<{}>, 
    table_name: string
): Promise<E.Either<Error, PgColumnSchema[]>> => {
    try {
        const table_schema: PgColumnSchema[] = await pg_pool`
            SELECT column_name, data_type, is_nullable    
            FROM information_schema.columns
            WHERE table_name = ${table_name}
            ORDER BY ordinal_position;
        `;

        if (!table_schema.length) {
            return E.left(new Error(`\n\n  ERROR: Table with name '${table_name}' is not found\n`))
        }

        return E.right(table_schema);
        
    } catch (error) {
        return E.left(new Error(JSON.stringify(error)));
    }
}