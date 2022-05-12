<template>
  <div class="card" @click="clickCard">
    <img :src="img"
         alt="">
    <div class="describe">
      <span class="title">{{title}}</span>
      <span class="pic">￥{{pic}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img:{
      type:String,
      default:''
    },
    title: {
      type: String,
      default: ''
    },
    pic: {
      type: Number,
      default: null
    }
  },
  methods: {
    clickCard() {
      this.$emit('clickCard')
    }
  },
}
</script>

<style lang="less" scoped>
.card {
  width: 170px;
  background-color: #fff;
  border-radius: 15px;
  break-inside: avoid;
  margin-bottom: 10px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
  .describe {
    padding: 0 10px;
    span {
      display: block;
      line-height: 1.5;
      padding: 5px 0;
    }
    .pic {
      font-weight: bold;
    }
  }
}
</style>