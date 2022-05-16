<template>
  <list v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
    <div class="goods">
      <GoodsCard v-for="(item,index) in cardList"
                 :key="index"
                 :img="item.goods_avatar"
                 :title="item.goods_name"
                 :pic="item.goods_price"
                 @clickCard="clickCard(item.goods_id)"></GoodsCard>
    </div>
  </list>
</template>

<script>
import { List } from 'vant';
import GoodsCard from '@/components/GoodsCard/index.vue';
import { getGoodsList } from '@/api/goods';
export default {
  components: {
    GoodsCard,
    List
  },
  data () {
    return {
      loading: false,
      finished: false,
      currentPage: 1,
      pageSize: 20,
      frequency: 1,
      cardList: [
        {
          id: 1,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        },
        {
          id: 2,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        },
        {
          id: 3,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        },
        {
          id: 4,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        },
        {
          id: 5,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        },
        {
          id: 6,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        },
        {
          id: 7,
          img: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          title: 'Q版表情包系列珠光工艺徽章',
          pic: 12
        }
      ]
    }
  },
  methods: {
    clickCard (id) {
      this.$router.push({
        path: '/goods',
        query: {
          id
        }
      })
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      getGoodsList(this.currentPage, this.pageSize * this.frequency).then(res => {
        console.log(res);
        this.cardList = res.data.data

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        this.finished = true;
        this.frequency = this.frequency++
      })
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.cardList.push(this.cardList[i]);
      //   }



      //   // 数据全部加载完成
      //   if (this.cardList.length >= 20) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
}
</script>

<style lang="less" scoped>
// .goods {
//   padding: 10px 5px;
//   /* 声明一个容器 */
//   display: grid;
//   /*  声明列的宽度  */
//   grid-template-columns: repeat(2, 50%);
//   grid-row-gap: 10px;
//   justify-items: center;
// }
.goods {
  margin: 10px 10px 0 10px;
  column-count: 2;
  column-gap: 10px;
}
</style>