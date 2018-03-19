<template>
  <div class="tab-content">
    <y-header title="售货机后台系统" isgo="isgo"></y-header>
    <div class="content" margin-header>
      <div class="scroll-content" margin-tabbar ref="indexScroll">
        <div class="index" @click="getData()">
          首页
        </div>
        <el-checkbox v-model="checked">备选项</el-checkbox>
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
    name:"index",
    data(){
      return {
        checked:false,
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
        "indexsale_"
      ]),
      ...mapMutations({

      }),
      getData(){
        this.indexsale_().then((res)=>{
          console.info(res)
        })
      }

    }
  }

</script>

<style>
@import "../../assets/css/index.css";

</style>
