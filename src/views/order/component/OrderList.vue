<template>
  <div class="order-list">
    <pull-refresh v-model="isLoading"
                  success-text="刷新成功"
                  @refresh="onRefresh">
      <div v-if="!isEmptyState">
        <GoodsCardRow v-for="item in orderList"
                      :key="item.id"
                      :id="item.id"
                      :thumb="item.thumb"
                      :title="item.title"
                      :desc="item.desc"
                      :price="item.price"
                      :num="item.num"
                      :isStepper="false"
                      @onClickCard="onClickCard">
          <template #footer>
            <div @click.stop>
              <van-button round
                          type="info"
                          :loading="isButtonLoading"
                          @click="onClickButton"
                          size="small">付款</van-button>
            </div>
          </template>
        </GoodsCardRow>
      </div>
      <div v-else
           class="empty-state">
        <EmptyState :image="require('@/assets/image/ordernull.webp')"
                    description="暂无订单"></EmptyState>
      </div>
    </pull-refresh>
    <Popup class="popup-confirm"
           :closeable="true"
           :isPopup.sync="isPopupConfirm"
           @onClosed="onClosedConfirm">
      <div class="name">【原神】Q版表情包系列 珠光工艺徽章 Genshin Genshin</div>
      <div class="amount">
        <span>￥</span>
        <span class="pic">19.00</span>
      </div>
      <div class="remain-time">
        <span>剩余支付时间：</span>
        <count-down :time="time"
                    format="mm:ss" />
      </div>
      <div class="plat">
        <Plat @onChangeRadio="onChangeRadioPlat"></Plat>
      </div>
      <van-button type="primary"
                  @click="onClickPayment"
                  round
                  block>确认支付</van-button>
    </Popup>
  </div>
</template>

<script>
import { PullRefresh,CountDown, Button as VanButton } from 'vant';
import GoodsCardRow from '@/components/GoodsCardRow/index.vue';
import EmptyState from '@/components/EmptyState/index.vue';
import Plat from './Plat.vue';
import Popup from '@/components/Popup/index.vue';
import _ from 'lodash';
export default {
  components: {
    GoodsCardRow,
    EmptyState,
    PullRefresh,
    VanButton,
    Plat,
    Popup,
    CountDown,
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      isLoading: false,
      isButtonLoading: false,
      isPopupConfirm: false,
      isEmptyState: false,
      orderList: [
        {
          id: 1,
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机',
          desc: '12+256',
          price: 1000.22,
          num: 1
        }
      ],
      time: 30 * 60 * 1000,
    }
  },
  watch: {
    active: {
      immediate: true,
      handler: _.debounce(function (val) {
        console.log(val);
      }, 0)
    },
    orderList: {
      immediate: true,
      handler (val) {
        console.log(val.length);
        if (val.length > 0) {
          this.isEmptyState = false
        } else {
          this.isEmptyState = true
        }
      }
    }
  },
  methods: {
    // 刷新
    onRefresh () {
      setTimeout(() => {
        console.log('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    // 点击订单
    onClickCard (val) {
      this.$router.push({
        path: '/orderdetails',
        query: {
          id: val
        }
      })
    },
    //
    onClickButton () {
      this.isPopupConfirm = true
    },
    onClosedConfirm () {

    },
    onChangeRadioPlat (val) {
      console.log(val);
    },
    // 付款
    onClickPayment () {
      console.log('付款');
    }
  },
}
</script>

<style lang="less" scoped>
.order-list {
  height: 100%;
  .van-pull-refresh {
    height: 100%;
    .empty-state {
      padding: 60px 0 30px 0;
    }
  }
  .van-button {
    color: #ff6d6d;
    border-color: #ff6d6d;
    background-color: #fff;
    padding: 0 20px;
    margin: 10px 0 0 0;
  }

  .popup-confirm {
    box-sizing: border-box;
    padding: 40px 10px 30px;
    text-align: center;
    .name {
      font-size: 16px;
      line-height: 22px;
      color: #666;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .amount {
      color: #ff6d6d;
      margin: 10px 0 0 0;
      span {
        height: 30px;
        line-height: 30px;
        font-size: 24px;
      }
      .pic {
        font-size: 36px;
        height: 30px;
      }
    }
    .remain-time {
      display: flex;
      justify-content: center;
      margin: 10px 0 0 0;
      font-size: 14px;
      font-weight: 400;
      color: #999;
      height: 18px;
      line-height: 18px;
      .van-count-down {
        color: #999;
      }
    }
    .van-button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 90%;
      margin: 10px auto;
      color: #fff;
      background-color: #ff6d6d;
      border: 1px solid #ff6d6d;
    }
    .plat {
      text-align: left;
      margin: 20px 0 0 0;
    }
  }
}
</style>