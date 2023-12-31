entrypoint="./src/main.ts"
outfile="./dist/index.mjs"

bun build $entrypoint --outfile $outfile --target node