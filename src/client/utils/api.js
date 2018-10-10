const NYTIMES_API_KEY = "1f76ed233fca493ebed43fb8043db0ec";
const NYT_URL = `https://api.nytimes.com/svc/`;
const NYT_TOP_STORIES = `${NYT_URL}topstories/v2/home.json`;

const INSTAGRAM_CLIENT_ID = "48f9ca3078bc4317837fe617dfb6ae10";

const INSTAGRAM_AUTH_LINK = `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=localhost:3000&response_type=code`

export const instagramAUTH = () => {
    return fetch(INSTAGRAM_AUTH_LINK)
        .then(r => r)
        .catch(e => {
        throw e.message
    })

}

export const fetchInformation = (endpoint, addition) => {
    return fetch(`${NYT_TOP_STORIES}?api-key=${NYTIMES_API_KEY}`)
        .then(r => r.json())
        .catch(e => console.warn(e.message))
}
