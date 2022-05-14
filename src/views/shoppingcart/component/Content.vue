<template>
  <div class="shopping-cart-content">
    <div v-if="!isEmptyState">
      <CheckboxList ref="CheckboxList"
                    @checkListData="checkListData">
        <swipe-cell v-for="item in shoppingCart"
                    :key="item.id"
                    :name="item.id"
                    :before-close="beforeClose">
          <div class="item">
            <checkbox :name="item.id">
            </checkbox>
            <GoodsCardRow :id="item.id"
                          :thumb="item.thumb"
                          :title="item.title"
                          :desc="item.desc"
                          :price="item.price"
                          :num="item.num"
                          @onClickCard="onClickCard"></GoodsCardRow>
          </div>
          <template #right>
            <van-button square
                        text="删除"
                        type="danger"
                        class="delete-button" />
          </template>
        </swipe-cell>
      </CheckboxList>
      <SubmitBar :resultLength="result.length"
                 :priceTotal="priceTotal"
                 :isCheckedAll="isCheckedAll"
                 @checkAll="checkAll"
                 @onSubmit="onSubmit"></SubmitBar>
    </div>
    <div class="show-empty-state"
         v-else>
      <EmptyState class="empty-state"
                  :image="require('@/assets/image/shoppingcartnull.webp')"
                  description="您的购物车空空如也～"></EmptyState>
      <div class="recommend">
        为你推荐
      </div>
      <Goods></Goods>
    </div>
  </div>
</template>

<script>
import { Checkbox, SwipeCell, Button as VanButton, Cell, Dialog } from 'vant';
import CheckboxList from '@/components/CheckboxList/index.vue';
import GoodsCardRow from '@/components/GoodsCardRow/index.vue';
import SubmitBar from '@/components/SubmitBar/index.vue';
import EmptyState from '@/components/EmptyState/index.vue';
import Goods from '@/views/home/component/Goods.vue';
export default {
  components: {
    Checkbox,
    CheckboxList,
    GoodsCardRow,
    SubmitBar,
    EmptyState,
    Goods,
    SwipeCell,
    VanButton,
    Cell,
  },
  data () {
    return {
      result: [],
      isCheckedAll: false,
      isEmptyState: true,
      shoppingCart: [
        {
          id: 1,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          num: 1
        }
      ],
      priceTotal: 0
    }
  },
  watch: {
    shoppingCart: {
      immediate: true,
      handler (val) {
        if (val.length > 0) {
          this.isEmptyState = false
        } else {
          this.isEmptyState = true
        }
      }
    }
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose ({ name, position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
            console.log(name);
            this.shoppingCart.splice(name - 1, 1)
          }).catch(() => {
            console.log('取消');
          });
          break;
      }
    },
    // 点击购物车商品
    onClickCard (id) {
      this.$router.push({
        path: '/goods',
        query: {
          id
        }
      })
    },
    // 选择列表
    checkListData (result) {
      this.priceTotal = 0
      this.result = result
      if (this.shoppingCart.length == result.length) {
        this.isCheckedAll = true
      } else {
        this.isCheckedAll = false
      }
      this.result.forEach(item1 => {
        this.shoppingCart.forEach(item2 => {
          if (item1 == item2.id) {
            this.priceTotal += item2.price
          }
        })
      })
    },
    // 全选
    checkAll (checked) {
      this.$refs.CheckboxList.$refs.checkboxGroup.toggleAll(checked)
    },
    // 提交
    onSubmit () {
      this.$router.push({
        path:'/orderconfirm'
      })
    }
  },
}
</script>

<style lang="less" scoped>
.shopping-cart-content {
  background-color: #fff;
  .item {
    display: flex;
    .van-checkbox {
      padding-left: 10px;
    }
  }
  .delete-button {
    height: 100%;
  }
  .van-submit-bar {
    bottom: 50px;
  }
  .show-empty-state {
    background-color: #f3f3f4;
    .empty-state {
      background-color: #fff;
    }
    .recommend {
      margin: 10px 10px 0 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>