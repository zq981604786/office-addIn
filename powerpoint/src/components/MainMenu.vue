<template lang="pug">
  div
    router-link(to="login") 登录
    | &nbsp;|&nbsp;
    router-link(to="home") 主页
</template>
<style lang="scss" scoped>
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
