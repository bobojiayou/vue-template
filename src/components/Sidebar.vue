<template>
    <ul class="">
        <li>
            <router-link to="/welcome">欢迎页</router-link>
        </li>
        <li>
            <router-link to="/list">严选小哥一1号列表</router-link>
        </li>
    </ul>
</template>
<script>
    export default {
      name : 'Sidebar'
    }
</script>
<style lang="sass" scoped>
ul {
  color: white;
  background-color: black;
  min-height: 500px;
}
</style>