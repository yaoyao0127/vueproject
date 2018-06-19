<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/mypage">1.视频管理系统</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到王耀莹的vue项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  margin-top: 100px;
}
p {
  margin-top: 50px;
  font-size: 30px;
}
</style>
