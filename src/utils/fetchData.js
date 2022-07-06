export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new TypeError(err.message);
  }
};
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
  },
};
export const youTubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_YOUTUBE_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_YOUTUBE_HOST,
  },
};
export const quoteOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host":
      "https://bodybuilding-quotes1.p.rapidapi.com/random-quote",
  },
};
