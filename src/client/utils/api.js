const NYTIMES_API_KEY = "1f76ed233fca493ebed43fb8043db0ec";
const NYT_URL = `https://api.nytimes.com/svc/`;
const NYT_TOP_STORIES = `${NYT_URL}topstories/v2/home.json`;


export const fetchInformation = (endpoint, addition) => {
  return fetch(`${NYT_TOP_STORIES}?api-key=${NYTIMES_API_KEY}`)
    .then(r => r.json())
    .catch(e => console.warn(e.message))
}
