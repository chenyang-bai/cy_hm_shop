<template>
    <div>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="大家快来评评论"
        @load="onLoad()"
        >
            <van-row v-for="(item, index) in comment" :key="item.id">
                <h6><span>第{{index + 1}}楼</span>&nbsp;&nbsp;<span>用户:匿名用户</span>&nbsp;&nbsp;<span>发表时间:{{item.add_time | dateFormat('yyyy-MM-DD')}}</span></h6>
                <p class="text">{{item.content}}</p>
            </van-row>
        </van-list>
        <van-row v-model="finished">
            <van-button color="#F02940" type="primary" v-show="!finished" block plain>加载更多</van-button>
        </van-row>
    </div>
</template>
<script>
export default {
  props: ['comments', 'artid'],
  data () {
    return {
      loading: false,
      finished: false,
      comment: [],
      id: ''
    }
  },
  mounted () {

  },
  methods: {
    onLoad () {
      // 异步更新数据
      console.log(this.artid)
      this.id = parseInt(this.artid)
      console.log(this.id)
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(async () => {
        const { data: res } = await this.$http.get('/api/getcomments/' + this.id + '?pageindex=1')
        this.comment = res.message
        console.log(this.comment)
        console.log(res)
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.comment.length >= res.message.length) {
          this.finished = true
        }
      }, 2000)
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
    font-size: 16px;
    word-wrap: break-word;
    word-break: break-all
}
</style>
