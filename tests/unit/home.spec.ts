import { shallowMount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'
import { countryData } from '../../src/shared/filterData'
import Filter from '../../src/components/filters.vue'

describe('hotel component testing ', () => {
  let homeComponentWrapper
  let filterComponentWrapper
  beforeEach(() => {
    homeComponentWrapper = shallowMount(Home)
    const filters = {
      countries: [],
      cities: []
    }
    homeComponentWrapper.setData({
      filterObj: filters
    })
    filterComponentWrapper = homeComponentWrapper.find(Filter)
      filterComponentWrapper.vm.countries = countryData()
      filterComponentWrapper.vm.filters = filters
  });
  it('should filters initialized with 0 length', () => {
    expect(homeComponentWrapper.vm.filterObj.countries.length).toBe(0)
    expect(homeComponentWrapper.vm.filterObj.cities.length).toBe(0)
  })
})
