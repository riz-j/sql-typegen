db_conn="postgresql://admin:newpassword@localhost:5433/postgres"
dist_file="dist/index.js"
table_name="countries"

node $dist_file --database $db_conn --table $table_name   