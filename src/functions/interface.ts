export const generate_interface_line = (
    property_name: string,
    property_type: string,
    is_nullable: boolean
): string => {
    return `${property_name}: ${property_type}${is_nullable ? " | null" : ""};`
}

export const wrap_interface = (interface_name: string, content_child: string): string => {
    return `export interface ${interface_name} {\n${content_child}\n}`
}