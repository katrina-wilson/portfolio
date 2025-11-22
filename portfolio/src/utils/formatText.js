
export const toCamelCase = (text) => {
    return text
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
};

export const toSnakeCase = (text) => {
    console.log(text)
    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\//g, '-');  
};