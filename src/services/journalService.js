const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/data/journals`)
        .then(res => res.json())
}