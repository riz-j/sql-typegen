import { expect, test } from "bun:test";
import { exec } from "child_process";
import { existsSync } from "fs";

test("Generate TS files", done => {
    exec("pnpm dlx sql-typegen@0.0.11 \
        --database postgres://my_username:my_password@170.64.176.135:5432/postgres \
        --table continents", (error, stdout, stderr) => {
            if (error) {
                done(error);
                return;
            }

            expect(stdout).toContain("SUCCESS");
            expect(stdout).toContain("continent.ts");
            expect(stdout).toContain("generated");

            expect(existsSync("continent.ts")).toBe(true);
            
            done();
        }
    );
});