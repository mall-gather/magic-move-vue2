<template>
  <div class="service">
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <ChatBox></ChatBox>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
import ChatWindow from './component/ChatWindow.vue';
import ChatBox from './component/ChatBox.vue';
export default {
  components: {
    NavBar,
    ChatWindow,
    ChatBox,
  },
}
</script>

<style>

</style>