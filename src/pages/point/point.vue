<template>
  <div class="tab-content">

    <y-header title="点位" isgo="isgo"></y-header>

    <div class="content" margin-header>
      <div class="scroll-content" margin-tabbar>
        <div class="point">
          点位
        </div>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width: 100%">
          </van-swipe-item>
        </van-swipe>

        <van-cell-group>
          <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
          />

          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>

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

  import {Swipe,SwipeItem,Field  } from 'vant'

  Vue.use(Swipe).use(SwipeItem).use(Field);

  export default {
    name:"point",
    data(){
      return {
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        ],
        username:"",
        password:"",
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

    }
  }

</script>

<style>
  @import "../../assets/css/point.css";

</style>
