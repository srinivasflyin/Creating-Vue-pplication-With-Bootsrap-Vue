<template>
  <div class="home">
    <div>
      <Filters v-on:update:filter="filterObj= $event"/>
    </div>
    <div>
      <Hotel :filters="filterObj"/>
    </div>
  <div>
  </div>
  </div>
</template>

<script lang='ts'>
import  { FilterClass }  from '../shared/classesAndInterfaces' 
// @ is an alias to /src
import {Component,Vue } from 'vue-property-decorator';
import Hotel from  '@/components/hotels.vue';
import Filters  from '@/components/filters.vue';
@Component({
  name: 'Home',
  components: {
    Hotel,
   Filters
  }
})
export default class Home extends Vue {
  public filterObj: FilterClass = {countries: [], cities: []};
  constructor() {
    super()
    this.filterObj['countries'] =  []
    this.filterObj['cities'] = []
  }
}
</script>
