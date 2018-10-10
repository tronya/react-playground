const api_url = "http://api.tvmaze.com/";

export const search_query_request = params => {
    return fetch(`${api_url}search/shows?q=${params}`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}
