import { expect, test } from "bun:test";
import { exec } from "child_process";

test("Generate interface", done => {
    exec("bun src/main.ts  \
        --database postgresql://admin:newpassword@localhost:5433/postgres  \
        --table countries", (error, stdout, stderr) => {
        expect(stdout).toContain("SUCCESS: country.ts has been generated");
        done();
    });
});

test("Produce error message when table is not found", done => {
    exec("bun src/main.ts  \
        --database postgresql://admin:newpassword@localhost:5433/postgres  \
        --table nosuchtable", (error, stdout, stderr) => {
        expect(stdout).toContain("ERROR: Table with name 'nosuchtable' is not found");
        done();
    });
});

test("Run build", done => {
    exec("./build.sh && ./run-build.sh", (error, stdout, stderr) => {
        expect(stdout).toContain("SUCCESS");
        expect(stdout).toContain("has been generated")
        done();
    });
});