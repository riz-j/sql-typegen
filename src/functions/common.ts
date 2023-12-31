/**
 * Retrieves the value following a specific command-line tag.
 * @param argv - Array of command-line arguments.
 * @param tag - The specific tag to find in the argv array.
 * @returns - The value immediately following the tag or undefined if the tag is not found.
 * @example getArgvValue(process.argv, "--database");
 * @example getArgvValue(process.argv, "--table");
 */
export const getArgvValue = (argv: string[], tag: string): string => argv[argv.indexOf(tag) + 1];


/**
 * Capitalizes the first letter of a given string.
 * @param string - The string to capitalize.
 * @returns - The input string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/**
 * Converts a plural word to its singular form based on common English language rules.
 * It matches the word against known plural endings and replaces with the corresponding singular ending.
 * @param word - The plural word to be singularized.
 * @returns - The singular form of the input word, if a matching rule is found; otherwise, the original word.
 */
export const singularize = (word: string): string => {
    const endings: { [key: string]: string } = {
        ves: 'fe',
        ies: 'y',
        i: 'us',
        zes: 'ze',
        ses: 's',
        es: 'e',
        s: ''
    };

    return word.replace(
        new RegExp(`(${Object.keys(endings).join('|')})$`), 
        r => endings[r]
    );
}
