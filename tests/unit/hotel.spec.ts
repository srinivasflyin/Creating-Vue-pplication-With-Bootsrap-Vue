import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Hotel from '../../src/components/hotels.vue'
import { FilterClass, HotelObj } from '../../src/shared/classesAndInterfaces'
import { countryData, cityData } from '../../src/shared/filterData'
import hotelsData from '../../src/shared/hotelsDummyData'
import List from '../../src/components/list.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
class State {
  hotels: Array<HotelObj> = []
}
describe('hotel component testing ', () => {
  let mutations;
  let store;
  let getters;
  let state: State;
  let hotelComponentWrapper;
  const filters: FilterClass = { countries: [], cities: [] };
  beforeEach(() => {
    state = {
      hotels: hotelsData
    }
    mutations = {
      GET_HOTELS(state: State, hotels: Array<HotelObj>) {
        state.hotels = hotels;
      }
    },
      getters = {
        GET_HOTELS(state: State) {
          return state.hotels;
        }
      }

    filters.countries = countryData()
    filters.cities = cityData()
    store = new Vuex.Store({
      mutations,
      getters,
      state
    })
    hotelComponentWrapper = shallowMount(Hotel, {
      store,
      localVue,
      propsData: {
        filters: filters
      }
    })
  })

  
  it('should check the countries and cities length', () => {
    expect(hotelComponentWrapper.props().filters.cities.length).toBe(3)
    expect(hotelComponentWrapper.props().filters.countries.length).toBe(3)
  })
  it('should country data matching with passed props', () => {
    expect(hotelComponentWrapper.props().filters.countries).toEqual(countryData())
  })
  it('should city data matching with passed props', () => {
    expect(hotelComponentWrapper.props().filters.cities).toEqual(cityData())
  })

  it('should child component has rendered', ()=>{
    const listComponentWrapper = hotelComponentWrapper.find(List);
    listComponentWrapper.setProps({
      items: hotelsData
    })
    expect(listComponentWrapper.exists()).toBe(true)
  })
})