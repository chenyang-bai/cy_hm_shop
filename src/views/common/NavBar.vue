<template>
  <div class="navbox">
    <van-nav-bar
      title="黑马程序员.vant"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
      />
  </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      // Toast('返回')
      history.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.van-nav-bar{
  background-color: #1989FA;
}
/deep/.van-nav-bar__text {
  color: #fff;
}
/deep/.van-nav-bar .van-icon{
  color: #fff;
}
/deep/.van-nav-bar__title{
  color: #fff;
}
</style>
