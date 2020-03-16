import { mount } from '@vue/test-utils'
import Filter from '../../src/components/filters.vue'
import { countryData, cityData } from '../../src/shared/filterData'
describe('List component ', () => {
    let filterComponentWrapper;
    beforeEach(() => {
        filterComponentWrapper = mount(Filter)
        filterComponentWrapper.vm.countries = countryData()
        filterComponentWrapper.vm.cities = cityData()
    })

    it('should select the desired country', async () => {
        const getSelectedCountrySpy = jest.spyOn(filterComponentWrapper.vm, 'getSelectedCountry')
        const countryCheckbox = filterComponentWrapper.find('.countrySelect')
        countryCheckbox.setChecked()
        countryCheckbox.trigger('change')
        filterComponentWrapper.vm.getSelectedCountry()
        expect(getSelectedCountrySpy).toHaveBeenCalled()
        filterComponentWrapper.vm.$emit('update:filter')
        await filterComponentWrapper.vm.$nextTick()
        expect(filterComponentWrapper.emitted()['update:filter']).toBeTruthy()
        expect(filterComponentWrapper.vm.filters.countries[0]).toEqual('Austrailia')
    })


    it('should select the desired city', () => {
        const cityCheckbox = filterComponentWrapper.find('.citySelect')
        cityCheckbox.setChecked()
        cityCheckbox.trigger('change')
        const getSelectedCitySpy = jest.spyOn(filterComponentWrapper.vm, 'getSelectedCity')
        filterComponentWrapper.vm.$emit('update:filter')
        filterComponentWrapper.vm.getSelectedCity()
        expect(getSelectedCitySpy).toHaveBeenCalled()
        expect(filterComponentWrapper.emitted()['update:filter']).toBeTruthy()
        expect(filterComponentWrapper.vm.filters.cities[0]).toEqual('perth')
    })
})