<template>
  <div>
    <div class="tabs">
      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <!--<keep-alive>-->
        <router-view name="node"></router-view>
        <!--</keep-alive>-->
      </transition>
      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <keep-alive>
          <router-view name="footer"></router-view>
        </keep-alive>
      </transition>
    </div>
    <!-- 通过路由 push进来的页面渲染view -->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*配置全局样式*/
  @import "assets/css/base.css";
  @import "assets/css/master.css";
  @import "assets/css/animate.css";


</style>
