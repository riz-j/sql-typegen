import { PostgresDbOptions } from "@/models/db";
import * as E from "fp-ts/Either";

export const parse_db_connection_url = (db_connection_url: string): E.Either<Error, PostgresDbOptions>  => {
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