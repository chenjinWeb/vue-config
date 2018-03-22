<template>
  <div class="search_input search_latitud">
    <label class="form">
      <input type="search" id="suggestId" placeholder="请输入要搜索的地址" class="search" v-model="name">
    </label>
    <div class="search_btn" @click="search(name)">搜索</div>
  </div>
</template>

<script>

    export default {
        name: "y-search",
        data() {
            return {
              name:""
            }
        },
        computed: {},
        props:{

        },
        methods: {
          search(){
            this.$emit("search",this.name)
          }
        },
        mounted() {

        }

    }

</script>

<style scoped>


</style>
