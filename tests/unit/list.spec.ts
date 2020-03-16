import { shallowMount } from '@vue/test-utils'
import List from '../../src/components/list.vue'
import hotelsData from '../../src/shared/hotelsDummyData'
describe('testing list component', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(List, {
            propsData: {
                items: hotelsData
            }
        })
    })

    it('should register list component', () => {
        expect(wrapper.props().items.length).toBe(17)
    })
})