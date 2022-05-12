<template>
  <Search>
    <template #left>
      <div class="come-back">
        <icon name="arrow-left" />
      </div>
    </template>
  </Search>
</template>

<script>
import { Icon } from 'vant';
import Search from '@/components/Search/index.vue';
export default {
  components: {
    Search,
    Icon,
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.come-back {
  align-self: center;
  padding: 0 10px 0 0;
}
</style>