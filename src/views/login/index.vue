<template>
  <div class="login">
    <NavBar></NavBar>
    <LogoCard></LogoCard>
    <Content></Content>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
import LogoCard from '../../components/LogoCard/index.vue';
import Content from './component/Content.vue';
export default {
  components: {
    NavBar,
    LogoCard,
    Content,
  },
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #fff;
}
</style>