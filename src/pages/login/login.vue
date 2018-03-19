<template>
  <div class="content-modal">
    <div class="content">
      <div class="scroll-content">
        <div class="login_body">
          <div class="form">
            <div class="ifrom clear">
              <input type="text" name="name" placeholder="请输入登录名" class="name" v-model="user.username">
            </div>
            <div class="ifrom clear">
              <input type="password" name="password" placeholder="请输入密码" v-model="user.password">
            </div>

            <div style="text-align: left; line-height: 0.2rem; margin-top: 0.15rem">
              <label>
                <el-checkbox v-model="checked">记住密码</el-checkbox>
              </label>
            </div>

            <div class="sublogin" @click="login()"><a href="javascript:;" class="btn">登录</a></div>
            <div class="sublogin" @click="weiXinLogin()"><a href="javascript:;" class="btn" style="background-color: #63c73b">微信登录</a></div>
          </div>
          <!--<router-link :to="{name:'about'}" class="drop-down">
              下拉情况介绍<br><i class="icon">&#xe60c;</i>
          </router-link>-->
        </div>
      </div>
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'vuex';
  import {Toast,MessageBox} from 'mint-ui';
  import {userCookie} from "../../store/config"
  import {autoCookie,removeCookie} from "../../utils"
  export default {
    data() {
      return {
        user: {
          username: JSON.stringify(autoCookie(userCookie))=="{}"? "" : autoCookie(userCookie).user_name,
          password: JSON.stringify(autoCookie(userCookie))=="{}"? "" : autoCookie(userCookie).password
        },
        checked:JSON.stringify(autoCookie(userCookie))=="{}"? false : true
      }
    },
    mounted: function () {
      console.info(autoCookie(userCookie));
    },
    methods: {

      ...mapActions([
        'userlogin_',
        'wxbind_',
        'wxlogin_',
        "storehouse_"
      ]),
      ...mapMutations([
        "returnlimit"
      ]),
      login(){
        if(!this.user.username){
          Toast("用户名不能为空");
          return
        }
        if(!this.user.password){
          Toast("密码不能为空");
          return
        }
        this.userlogin_(this.user).then(
          (res) => {
            if (res.success == 200) {
              if(this.checked){
                autoCookie(userCookie,null,{user_name:this.user.username,password:this.user.password});
              }else{
                removeCookie(userCookie);
              }
              if (!res.openid) {
                setTimeout(() => {
                  this.goWxBind(res.userId);
                }, 200)
              }

              this.getproductlimit();
              this.$router.push({name: 'index'});
            }
//                        Object.assign(this._user, res);//保存用户信息
//                        this.$router.push({name: 'user'})
          }
        )
      },
      getproductlimit(){
        this.storehouse_({type:0}).then(res=>{
          if(res.success==200){
            this.returnlimit(res.extrasInfo.show);
          }
        })
      },
      weiXinLogin(){
        this.wxlogin_().then((res) => {
          if (res.success == 200) {
            window.location.href = res.url;
          }
        })
      },
      goWxBind(id){
        let config = {confirmButtonText: '跳过', cancelButtonText: '绑定', confirmButtonClass: 'cancel', cancelButtonClass: 'confirm'};
        MessageBox.confirm('您还未绑定微信帐号，绑定后，可直接用微信登录', config).then(
          () => {

          },
          () => {
            this.wxbind_({userId: id}).then((res) => {
              if (res.success == 200) {
                window.location.href = res.url;
              }
            })
          }
        );
      }
    }
  }
</script>
<style>
  @import "../../assets/css/login.css";
</style>
