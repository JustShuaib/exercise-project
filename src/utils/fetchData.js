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
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
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
/* export const quoteOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_QUOTES_HOST,
  },
}; */
// https://bodybuilding-quotes1.p.rapidapi.com/random-quote
// VITE_RAPID_API_KEY=de8956c527msh562f7ea946cdfb1p1799ffjsn949613cdbb54
// cefaea42damsh0868730e4dc65fap1ae89cjsn830e85ca6526
