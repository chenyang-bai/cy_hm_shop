<template>
    <div>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="大家快来评评论"
        @load="onLoad"
        >
            <van-row v-for="item in comments" :key="item.id">
                <h6><span>第{{item.count}}楼</span>&nbsp;<span>用户:匿名用户</span>&nbsp;<span>发表时间:{{item.date | dateFormat('yyyy-MM-DD')}}</span></h6>
                <p class="text">{{item.message}}</p>
            </van-row>
        </van-list>
        <van-row>
            <van-button color="#F02940" type="primary" block plain>加载更多</van-button>
        </van-row>
    </div>
</template>
<script>
export default {
  props: ['comments'],
  data () {
    return {
      loading: false,
      finished: false
    }
  },
  mounted () {

  },
  methods: {
    onLoad () {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        console.log(this.comments)
        if (this.comments.length >= 0) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
h6{
    background-color: #CCCCCC;
    padding:10px 0;
    margin: 0;
    font-weight: 400;
}
.text{
    text-indent : 20px;
    font-size: 16px
}
</style>
