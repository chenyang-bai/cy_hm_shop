<template>
    <div>
      <van-tabbar v-model="active" placeholder>
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="user-o">会员</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" badge="0">购物车</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
      </van-tabbar>
    </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {
      active: 0
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>

</style>
