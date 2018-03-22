<template>
  <div class="tab-content">

    <y-header title="补货" isgo="isgo"></y-header>

    <div class="content" margin-header>
      <div class="scroll-content" margin-tabbar>
        <y-search @search="search"></y-search>
      </div>
    </div>

    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </div>
</template>



<script>
  import Vue from "vue"

  import {mapState,mapActions,mapMutations} from "vuex"

  import {maxArr,getBeforeDate,comparearr,comparearrdes} from "../../utils"

  import {Toast,Loadmore} from "mint-ui";

  Vue.component(Loadmore.name, Loadmore);

  export default {
    name:"replen",
    data(){
      return {
        name:"111"
      }
    },
    watch:{

    },
    computed:{
      ...mapState({

      }),
    },
    mounted(){


    },
    methods:{
      ...mapActions([

      ]),
      ...mapMutations({

      }),
      search(name){
        console.info(name)
      }

    }
  }

</script>

<style>
  @import "../../assets/css/replen.css";

</style>
