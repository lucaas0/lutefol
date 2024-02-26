const baseURL = process.env.API_URL || 'https://api.lutefol.com/';

export const matchesURL = () => {
    console.log(process.env.API_URL);
    return `${baseURL}/matches/list`
}