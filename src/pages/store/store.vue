<template>
  <div class="tab-content">

    <y-header title="仓库" isgo="isgo"></y-header>

    <div class="content" margin-header>
      <div class="scroll-content" margin-tabbar>
        <div class="search_input search_latitud">
          <label class="form">
            <input type="search" id="suggestId" placeholder="请输入要搜索的地址" class="search" v-model="name">
          </label>
          <div class="search_btn" @click="search(name)">搜索</div>
        </div>
        <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
        <div id="map"></div>
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

  import {Toast,Loadmore,MessageBox} from "mint-ui";

  Vue.component(Loadmore.name, Loadmore);

  export default {
    name:"store",
    data(){
      return {
        name:""
      }
    },
    watch:{

    },
    computed:{
      ...mapState({

      }),
    },
    mounted(){
      // 百度地图API功能
      // 创建Map实例
      var map = new BMap.Map("map",{enableMapClick:false});
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);

      var myCity = new BMap.LocalCity();
      myCity.get((result)=>{
        var cityName = result.name;
        map.setCenter(cityName);
        MessageBox.alert(`当前定位城市${cityName}`)
      });
      var geolocation = new BMap.Geolocation();
      var point = new BMap.Point(116.331398,39.897445);
      map.centerAndZoom(point,15);
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.zoomIn();
          map.addOverlay(mk);
          map.panTo(r.point);
        }
        else {
          alert('failed'+this.getStatus());
        }
      },{enableHighAccuracy: true})

      map.addEventListener("click",function(e){
        map.clearOverlays();    //清除地图上所有覆盖物
        const p_p = {lng:e.point.lng,lat:e.point.lat};
        map.addOverlay(new BMap.Marker(p_p));    //添加标注
      });


      var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "suggestId"
          ,"location" : map
        });

      ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        document.getElementById("searchResultPanel").innerHTML = str;
      });

      var myValue;
      ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        document.getElementById("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
          var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
          //console.info(pp)
          map.centerAndZoom(pp, 18);
          map.addOverlay(new BMap.Marker(pp));    //添加标注
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
      });














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
  @import "../../assets/css/store.css";
</style>
