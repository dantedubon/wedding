<template>
<div>
   <let-it-snow v-bind="snowConf" :show="show"/>
  
 
    <Wedding />
</div>
 
</template>

<script>
import Wedding from "./components/Wedding";

export default {
  name: "App",
  components: {
    Wedding,
  },
  metaInfo: {
    title: " Dante & Nadia",
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Charmonman&family=Lovers+Quarrel&display=swap'
      }
    ]

  },
  data () {
    return {
      snowConf: {
            windPower : 5,  
            speed : 2,
            count : 50,
            size : 2,
            opacity : 0,
         
        },
        show: false      
    }
  },
  mounted() {
    this.show = true
  }
  
};
</script>

<style></style>
