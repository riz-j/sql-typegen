export interface PgDbOptions {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string
}

export interface PgColumnSchema {
    column_name: String,
    data_type: String,
    is_nullable: "NO" | "YES",
}