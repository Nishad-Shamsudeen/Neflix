
//API KEY & BASE URL from BrotoType
export const baseUrl ="https://api.themoviedb.org/3/";
export const API_KEY=process.env.REACT_APP_API_KEY;//api key from BrotoType
export const imageURL="https://image.tmdb.org/t/p/original"

export const originalMovieUrl=`${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`
export const actionMovieUrl=`${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`