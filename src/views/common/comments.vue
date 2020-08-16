<template>
    <div>
        <van-row>
          <van-field
          v-model="message"
          rows="2"
          autosize
          type="textarea"
          placeholder="请输入留言"
          show-word-limit
          />
          <van-button color="#1989FA" type="primary" @click="published" block>发表评论</van-button>
        </van-row>
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
            <van-button color="#F02940" type="primary" v-show="finished" block plain>加载更多</van-button>
        </van-row>
    </div>
</template>
<script>
import { Notify } from 'vant'
export default {
  props: ['artid'],
  data () {
    return {
      loading: false,
      finished: false,
      comment: [],
      comments: [],
      message: '',
      date: new Date(),
      count: ''
    }
  },
  mounted () {

  },
  methods: {
    async published () {
    //   console.log(123)
      if (this.message.trim() === '') {
        // 警告通知
        Notify({ type: 'warning', message: '请输入评论内容' })
        return
      } else {
        console.log(this.message)
        const content = this.message
        const { data: res } = await this.$http.post('/api/postcomment/' + this.artid, { content })
        Notify({ type: 'success', message: res.message })
        console.log(res)
      }
      if (this.comments.length >= 0) {
        this.count++
        this.comments.push({
          user_name: '匿名用户',
          add_time: this.date,
          content: this.message
        })
        this.message = ''
      }
      console.log(this.comments)
      location.reload()
    },
    onLoad () {
      // 异步更新数据
      console.log(this.artid)
      this.id = parseInt(this.artid)
      console.log(this.id)
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(async () => {
        const { data: res } = await this.$http.get('/api/getcomments/' + this.artid + '?pageindex=1')
        console.log(res.message)
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
.van-field{
    border: 1px solid #E0E0E0;
    height: 100px;
}
.van-button{
    margin: 5px 0;
}
.text{
    text-indent : 20px;
    font-size: 16px;
    word-wrap: break-word;
    word-break: break-all
}
</style>
