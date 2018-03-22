<template>
  <div class="tab-content">

    <y-header title="设备" isgo="isgo"></y-header>

    <div class="content" margin-header>
      <div class="scroll-content" margin-tabbar>
        <div class="device">
          <p>{{num | int}}</p>
          <div>{{time | date}}</div>
          <div>{{time | dates}}</div>
          <div>{{time | times}}</div>
          <div>{{second | formatSeconds}}</div>
          <div>{{thousand | thousand}}</div>
          <div>{{confusePhone | confusePhone}}</div>
          <div>{{formatNum | formatNum}}</div>
          <div>{{number | number}}</div>

          <input v-focus type="text" v-model="name"/>

          <div v-green>{{name}}</div>

          <div ref="tickRef">{{tick}}</div>
          <van-button type="primary" @click="changeTick()">主要按钮</van-button>
          <ul>
            <li v-for="item in items">{{item.name}}</li>
          </ul>
          <van-button type="primary" @click="addItem()">添加</van-button>
          <van-button type="primary" @click="changeItem()">改变items某个值</van-button>
        </div>
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

  import { Button } from 'vant';

  Vue.use(Button);

  Vue.component(Loadmore.name, Loadmore);

  export default {
    name:"device",
    data(){
      return {
        num:12.2110145451231664,
        time:1521681301012,
        second:123456,
        thousand:12345,
        confusePhone:13701756015,
        formatNum:1521,
        number:123.45,
        name:"222",
        tick:"测试nextTick",
        items:[
          {
            name:"test1",
            id:1
          },
          {
            name:"test2",
            id:2
          },
          {
            name:"test3",
            id:3
          }
        ]
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
      changeTick(){
        this.tick+="1";
        //DOM 还没更新的html
        console.info(this.$refs.tickRef.innerHTML);
        //DOM 已经更新的html
        this.$nextTick(()=>{
          console.info(this.$refs.tickRef.innerHTML);
        })
      },
      addItem(){
        this.items.push({name:"item",id:10});
        console.info(this.items);
      },
      changeItem(){
        this.$set(this.items,0,{name:"111",id:111})
        console.info(this.items);
      }

    }
  }

</script>

<style>
  @import "../../assets/css/device.css";

</style>
