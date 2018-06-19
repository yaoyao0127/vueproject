<template>
  <div id="app">
    <!-- 类似一个插槽，跳转某个路由，该路由下的页面就在这个插槽中渲染显示 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- 默认全局，加上scoped则表示只在该组件下起作用 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
