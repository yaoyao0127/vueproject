<template>
  <div class="hello">
    <div class="header"><p>{{ msg }}</p></div>
    <div class="video">
      <router-link to="/mypage"><p>视频管理系统</p></router-link>
    </div>
    <div class="user">
      <router-link to="/mypage"><p>用户管理系统</p></router-link>
    </div>
    <div class="data">
      <router-link to="/mypage"><p>数据管理系统</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Smart-E后台管理系统'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: relative;
}
.header {
  height: 100px;
  background-color: #0080FF;
  color: white;
  font-size: 40px;
  line-height: 100px;
}
.video {
  height: 150px;
  width: 150px;
  position: absolute;
  left: 300px;
  top: 250px;
  font-size: 24px;
  background-color: #0080FF;
  border-radius: 10%;
  line-height: 150px;
}
.video p{
  color: white;
}
.user {
  height: 150px;
  width: 150px;
  position: absolute;
  left: 670px;
  top: 250px;
  font-size: 24px;
  background-color: #0080FF;
  border-radius: 10%;
  line-height: 150px;
}
.user p{
  color: white;
}
.data {
  height: 150px;
  width: 150px;
  position: absolute;
  left: 1040px;
  top: 250px;
  font-size: 24px;
  background-color: #0080FF;
  border-radius: 10%;
  line-height: 150px;
}
.data p{
  color: white;
}
</style>
