const baseURL = process.env.API_URL || 'https://api.lutefol.com';

export const matchesURL = () => {
    return `${baseURL}/matches`
}

export const matchesListURL = () => {
    return `${baseURL}/matches/list`
}