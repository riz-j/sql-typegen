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

<table>
    <tr>
        <th colspan="3">Parameters</th>
    </tr>
    <tr>
        <td>--database</td>
        <td>Database connection string</td>
        <td>REQUIRED</td>
    </tr>
    <tr>
        <td>--table</td>
        <td>Name of the SQL table to generate</td>
        <td>REQUIRED</td>
    </tr>
    <tr>
        <td>--outdir</td>
        <td>Output directory</td>
        <td>OPTIONAL</td>
    </tr>
</table>
