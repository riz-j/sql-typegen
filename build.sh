entrypoint="./src/main.ts"
outfile="./dist/index.js"

bun build $entrypoint --outfile $outfile --target node --format esm