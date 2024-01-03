import * as E from "fp-ts/lib/Either";

/**
 * Retrieves the value following a specific command-line tag.
 * @param argv - Array of command-line arguments.
 * @param tag - The specific tag to find in the argv array.
 * @returns - The value immediately following the tag or undefined if the tag is not found.
 * @example get_argv_value(process.argv, "--database");
 * @example get_argv_value(process.argv, "--table");
 */
export const get_argv_value = (argv: string[], tag: string): E.Either<null, string> => {
    const index = argv.indexOf(tag);

    // Early return if the tag is not found or the next item is out of bounds
    if (index === -1 || index + 1 >= argv.length) {
        return E.left(null);
    }

    const item: string = argv[index + 1];

    // Early return if the next item is another tag
    if (item.startsWith("--")) {
        return E.left(null);
    }

    // Return the found item
    return E.right(item);
};


/**
 * Capitalizes the first letter of a given string.
 * @param string - The string to capitalize.
 * @returns - The input string with the first letter capitalized.
 */
export const capitalize_first_letter = (string: string): string => {
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


/**
 * Formats a message string with optional variant prefixes.
 * @param message - The main message text to format.
 * @param variant - "SUCCESS" | "ERROR" | "WARNING" Optional variant type to prefix the message with a specific emoji and variant name.
 * @returns - The formatted message string.
 */
export const format_message = (
    message: string,
    variant?: 'SUCCESS' | 'ERROR' | 'WARNING' 
): string => {
    if (!variant) {
        return `\n\n  ${message}\n`;
    }

    const emoji_map: { [key: string]: string } = {
        'SUCCESS': '✨',
        'ERROR': '🚨',
        'WARNING': '🚧'
    }

    return `\n\n  ${emoji_map[variant]} ${variant}: ${message}\n`;
}