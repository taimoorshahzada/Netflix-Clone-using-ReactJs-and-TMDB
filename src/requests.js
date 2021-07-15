const API_KEY = "9c01bc51e3095c9d889d05989bec36d1";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
}

export default requests;