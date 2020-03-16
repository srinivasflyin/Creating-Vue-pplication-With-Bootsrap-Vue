<template>
  <div>
    <List :items="filteredHotels" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import List from "./list.vue";
import  { FilterClass }  from '../shared/classesAndInterfaces' 
@Component({
  components: {
    List
  }
})
export default class Hotel extends Vue {
  public hotels: Array<any> = [];
  public filteredHotels: Array<any> = [];
  @Prop({
    required: true,
    default: Object
  })
  private filters!: FilterClass;
  @Watch("filters", { immediate: true, deep: true })
  onFilterChanged(val: FilterClass, oldVal: FilterClass) {
    this.searchHotels(val);
  }
  constructor() {
    super();
  }
  searchHotels(filters: FilterClass) {
    const htlValues: Array<any> = [];

    if (Object.keys(filters.countries).length > 0 || Object.keys(filters.cities).length > 0) {
      this.hotels.forEach(item => {
        if (
          filters.countries.includes(item.country) ||
          filters.cities.includes(item.city)
        ) {
          htlValues.push(item);
        }
      });
      this.filteredHotels = JSON.parse(JSON.stringify(htlValues));
    } else {
      this.filteredHotels = JSON.parse(JSON.stringify(this.hotels));
    }
  }
  created() {
    this.getHotels();
  }
  getHotels() {
    this.hotels = this.$store.getters.GET_HOTELS;
    if (this.filteredHotels.length === 0) {
      this.filteredHotels = JSON.parse(JSON.stringify(this.hotels));
    }
  }
}
</script>