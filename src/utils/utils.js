export const queryApi = (uri) => {
    return fetch(uri)
        .then((resp) => resp.json())
        .then((data) => data);
};