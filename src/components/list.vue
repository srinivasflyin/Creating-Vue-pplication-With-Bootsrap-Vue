<template>
 <div>
   <div v-for="item in items" :key="item.name">
      <!-- <img :src="getImgUrl(item.imgUrl)" :alt="item.name"/>
      <span>{{item.name}}</span> -->
      
   <b-card
    :title="item.name"
    :img-src="getImgUrl(item.imgUrl)"
    img-alt="Image 1"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >
  <!-- <b-img-lazy :bind="mainProps" :src="getImgUrl(item.imgUrl)" alt="Image 1">

  </b-img-lazy> -->
    <!-- <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text> -->

    <b-button href="#" variant="primary">Go</b-button>
  </b-card>
  </div>

</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BCard, BButton, BImgLazy  } from 'bootstrap-vue'
import {} from '../shared/classesAndInterfaces'
@Component({
    components: {
       'b-card': BCard,
       'b-button': BButton,
       'b-img-lazy' : BImgLazy
    }
})
export default class List extends Vue {
    @Prop() public items!: object []
    getImgUrl(imageUrl: string): string {
        return require(`../assets/hotelImages/${imageUrl}`)
    }
       public mainProps =  {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400,
          class: 'my-5'
        }
      
}
</script>