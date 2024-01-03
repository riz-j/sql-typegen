# sql-typegen

To run:

```bash
npx sql-typegen  \
    --database postgresql://<username>:<password>@<hostname>/<database>  \
    --table countries
```

This will generate a file called <b>country.ts</b>:

```typescript
export interface Country {
    country_id: number;
    name: string;
    population: bigint | null;
    continent_id: number;
}
```
