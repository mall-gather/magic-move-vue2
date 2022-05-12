<template>
  <div class="me">
    <MavBar></MavBar>
    <Personal></Personal>
    <Operate></Operate>
    <SignOut></SignOut>
  </div>
</template>

<script>
import MavBar from './component/NavBar.vue';
import Personal from './component/Personal.vue';
import Operate from './component/Operate.vue';
import SignOut from './component/SignOut.vue';
export default {
  components: {
    MavBar,
    Personal,
    Operate,
    SignOut,
  },
  data () {
    return {
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.me {
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>