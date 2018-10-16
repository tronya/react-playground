const api_url = "http://api.tvmaze.com/";

export const search_query_request = params => {
    return fetch(`${api_url}search/shows?q=${params}`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}

export const search_detail_movie_request = params => {
    return fetch(`${api_url}shows/${params}?embed=cast`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}

export const search_movie_episodes = params => {
    return fetch(`${api_url}shows/${params}/episodes`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}

export const search_movie_seasons = params => {
    return fetch(`${api_url}shows/${params}/seasons`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}

export const search_movie_cast = params => {
    return fetch(`${api_url}shows/${params}/cast`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}

export const getLatestResultsList = params => {
    return fetch(`${api_url}shows?page=${params}`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}

