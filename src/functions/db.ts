import { PgDbOptions } from "@/models/db";
import * as E from "fp-ts/Either";

const ACCEPTED_PROTOCOLS: ReadonlyArray<string> = ["postgresql:", "postgres:"];

/**
 * Parses the given database connection URL and returns PostgreSQL database options.
 * @param db_connection_url - The full database connection URL as a string.
 * @returns Either an Error object, or an object of PgDbOptions.
 */
export const parse_db_connection_url = (db_connection_url: string): E.Either<Error, PgDbOptions> => {
    try {
        const url = new URL(db_connection_url);

        if (!ACCEPTED_PROTOCOLS.includes(url.protocol)) {
            return E.left(new Error("Invalid protocol. Only 'postgresql' is currently supported. Make sure you prefix the URL with postgresql://<your-connection-string>."));
        }

        const host = url.hostname;
        if (!host) {
            return E.left(new Error("Invalid or missing host in the --database connection string."));
        }

        const port = parseInt(url.port);
        if (host === "localhost" && url.port && (isNaN(port) || port < 1 || port > 65535)) {
            return E.left(new Error("Invalid or missing port in the --database connection string."));
        }

        const database = url.pathname.split("/")[1];
        if (!database) {
            return E.left(new Error("Invalid or missing database name in the --database connection string."));
        }

        const username = url.username;
        if (!username) {
            return E.left(new Error("Invalid or missing username in the --database connection string."));
        }

        const password = url.password;
        if (!password) {
            return E.left(new Error("Invalid or missing password in the --database connection string."));
        }

        return E.right({ host, port, database, username, password });

    } catch (error) {
        return E.left(new Error(`Error parsing database connection URL: ${error}`));
    }
}
