<template>
  <div>
    <form>
      Countries
      <div class="form-check form-check-inline" v-for="country in countries" :key="country.name">
        <input
          class="form-check-input countrySelect"
          type="checkbox"
          id="inlineCheckbox1"
          :value="country.name"
          v-model="filters.countries"
          @click="getSelectedCountry"
        />
        <label class="form-check-label lable" for="inlineCheckbox1">{{country.name}}</label>
      </div>Cities
      <div class="form-check" v-for="city in cities" :key="city.id">
        <input
          class="form-check-input citySelect"
          type="checkbox"
          id="inlineCheckbox2"
          :value="city.name"
          v-model="filters.cities"
          @click="getSelectedCity"
        />
        <label class="form-check-label" for="inlineCheckbox2">{{city.name}}</label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { countryData, cityData } from '../shared/filterData'
import {City, Country } from '../shared/classesAndInterfaces'
class Countryandcity {
  countries: Array<Country> = []
  cities: Array<City> = []
}
@Component
export default class Filters extends Vue {
  public countries: Array<Country> = []
  public cities: Array<City> = []
  public filters: Countryandcity = {countries: [], cities: []}
  constructor() {
    super();
    this.countries = countryData()
    this.cities = cityData()
    this.filters['countries'] =  []
    this.filters['cities'] = []
  }
  @Emit('update:filter')
    updateFilter() {
     return this.filters
    }

  getSelectedCountry () {
    this.updateFilter()
  }
  getSelectedCity() {
    this.updateFilter()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
