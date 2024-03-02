const baseURL = process.env.API_URL || 'https://api.lutefol.com';

export const matchesURL = () => {
    return `${baseURL}/matches`;
}

export const matchesListURL = () => {
    return `${baseURL}/matches/list`;
}

export const listClubMatchesURL = <T>(clubId: number, params: URLSearchParams) => {
    return `${baseURL}/matches/${clubId}/list/?${params}`;
}

export const matchURL = (id: number) => {
    return `${baseURL}/matches/${id}`;
}