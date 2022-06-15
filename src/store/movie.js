import axios from 'axios'

export default {
  namespaced: true,
  state: ()=>({
    movies: []
  }),
  getters: {},
  mutations: {
    updataState(state, payload) {
      Object.keys(payload)
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: {
    async searchMovies(context, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      context.commit('updataState', {
        movies: Search,
        message: ''
      })
    }
  }
}