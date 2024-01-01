/**
 * Generates a single line for a TypeScript interface representing the property.
 * @param property_name The name of the property in the interface.
 * @param property_type The TypeScript type of the property.
 * @param is_nullable Boolean flag indicating if the property can be null.
 * @returns A string representing a single line of a TypeScript interface property.
 * 
 * @example generate_interface_line("country_id", "number", true) -> `country_id: number | null`
 */
export const generate_interface_line = (
    property_name: string,
    property_type: string,
    is_nullable: boolean
): string => {
    return `${property_name}: ${property_type}${is_nullable ? " | null" : ""};`
}

/**
 * Wraps provided content in a TypeScript interface structure.
 * @param interface_name The name of the interface.
 * @param content_child The string content representing all properties of the interface.
 * @returns A string representing the complete TypeScript interface.
 */
export const wrap_interface = (interface_name: string, content_child: string): string => {
    return `export interface ${interface_name} {\n${content_child}\n}`
}