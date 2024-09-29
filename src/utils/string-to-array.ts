export const StringToArray = (label: string) => {
    return label.split(',').map(i => i.trim())
}