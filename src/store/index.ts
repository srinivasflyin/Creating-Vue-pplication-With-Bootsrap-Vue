import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// const apiUrl = 'http:localhost://8080/hotels';
import  hotelsData  from '../shared/hotelsDummyData'
export default new Vuex.Store({
  state: {
    hotels: hotelsData
  },
  mutations: {
    GET_HOTELS(state, hotels) {
      state.hotels = hotels;
    }
  },
  getters: {
    GET_HOTELS(state) {
      return state.hotels;
    }
  },
  actions: {
  }
  // modules: {
  //   hotel
  // }
})
