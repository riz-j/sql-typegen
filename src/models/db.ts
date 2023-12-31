export interface PostgresDbOptions {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string
}

export interface ColumnSchema {
    column_name: String,
    data_type: String,
    is_nullable: "NO" | "YES",
}