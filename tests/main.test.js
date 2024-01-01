import { expect, test } from "bun:test";
import { exec } from "child_process";

test("Generate interface", done => {
    exec("bun src/main.ts  \
        --database postgresql://admin:newpassword@localhost:5433/postgres  \
        --table countries", (error, stdout, stderr) => {
        expect(stdout).toContain("generated successfully");
        done();
    });
});

test("Run build", done => {
    exec("./build.sh && ./run-build.sh", (error, stdout, stderr) => {
        expect(stdout).toContain("generated successfully");
        done();
    });
});