<template>
  <div class="hello">
    <div class="m-container">
        <div class="container">
          <img class="title" :src="dataAPI.Content.metadata.img_tv" alt="dataAPI.Content.metadata.img_tv">
          <h1 class="title">{{dataAPI.Content.metadata.titulo_internacional}}</h1> 
          <!-- <label class="title"> {{$t("message.Hi")}} {{dataAPI.Content.status_comercial | capitalize}} </label> -->     
          <label class="title"> {{$t("message.Hi")}} {{dataAPI.Content.short_summary}} </label>      
        </div>
        <div>
          <label> {{$t("message.Hi")}} {{dataAPI.Content.status_comercial | capitalize}} </label>
          <router-link                
          class="m-nav__item eforms"
          :to="{ path: '/about' }" 
          >
              <svg width="25" height="25" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 1.95C0.5 1.1402 1.1429 0.5 1.88329 0.5H9.13208C9.87249 0.5 10.5154 1.14019 10.5154 1.95V5.44121C10.5154 5.50436 10.4642 5.55556 10.401 5.55556C10.3379 5.55556 10.2867 5.50436 10.2867 5.44121V1.95C10.2867 1.30307 9.79856 0.772222 9.13208 0.772222H1.88329C1.21685 0.772222 0.728699 1.30306 0.728699 1.95V14.05C0.728699 14.6969 1.21685 15.2278 1.88329 15.2278H9.13208C9.79856 15.2278 10.2867 14.6969 10.2867 14.05V10.5588C10.2867 10.4956 10.3379 10.4444 10.401 10.4444C10.4642 10.4444 10.5154 10.4956 10.5154 10.5588V14.05C10.5154 14.8598 9.87249 15.5 9.13208 15.5H1.88329C1.1429 15.5 0.5 14.8598 0.5 14.05V1.95Z" fill="white" stroke="white"/>
                  <path d="M4.99995 8.8877C4.72381 8.8877 4.49995 8.66384 4.49995 8.3877C4.49995 8.11155 4.72381 7.8877 4.99995 7.8877V8.8877ZM17.2881 8.8877H4.99995V7.8877H17.2881V8.8877Z" fill="white"/>
                  <path d="M13.1843 5.7728C12.9595 5.61245 12.9072 5.30021 13.0675 5.07539C13.2279 4.85057 13.5401 4.7983 13.7649 4.95865L13.1843 5.7728ZM17.7119 8.3878L18.0022 7.98073L18.573 8.3878L18.0022 8.79487L17.7119 8.3878ZM13.7649 11.8169C13.5401 11.9773 13.2279 11.925 13.0675 11.7002C12.9072 11.4754 12.9595 11.1631 13.1843 11.0028L13.7649 11.8169ZM13.7649 4.95865L18.0022 7.98073L17.4216 8.79487L13.1843 5.7728L13.7649 4.95865ZM18.0022 8.79487L13.7649 11.8169L13.1843 11.0028L17.4216 7.98073L18.0022 8.79487Z" fill="white"/>
              </svg>
          </router-link>
        </div>
    </div>
    <carousel
    
    >
      <slide 
      v-for="slide in dataAPI.Content.cast"  
      class='slide'
      :key="slide.id">        
        <h4> {{ slide.character }} </h4>
        <img :src="slide.image" :alt="slide.character">
        <h4> {{ slide.name }} </h4>
      </slide>
    </carousel>
  </div>
</template>

<script>
/* import { mapGetters } from 'vuex';
import { mapActions } from 'vuex'; */
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide
  },
  created() {
    this.leerAPI();
  },
  data(){
    return{

    }
  },  
  methods: {
    leerAPI(){
      this.axios.get('http://test.qbst.com.ar/content.json')
      .then( response => {
        /* console.log(response.data); */
        // VUEX
        this.$store.dispatch('setReadAPI', {readAPI:response.data})
        // VUEX
      })
      .catch(error => {
        /* console.log(error); */
      })
    }
  },
  computed: {
    // ...mapGetters({
    //   dataAPI: 'getReadAPI',
    // })
    dataAPI(){
      return this.$store.getters.getReadAPI;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  margin-top: 59px;
  right: 0;
  left: 0;
  position: fixed;
  background-color: #0f2e52;
  top: 0;
  bottom: 0;
}
.container{
  width: 100%;
  display: inline-block;
  margin-top: 20px;
  .title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 27px;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
}
.VueCarousel{
  background-color: aqua;
}
</style>
