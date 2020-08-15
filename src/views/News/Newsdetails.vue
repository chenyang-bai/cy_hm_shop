<template>
    <div>
        <div><nav-bar></nav-bar></div>
        <div class="box">
            <van-row type="flex" justify="center" class="title">
                <van-col v-model="detail"><h3>{{detail.title}}</h3></van-col>
            </van-row>
            <van-row type="flex" justify="space-between" v-model="detail" class="date">
                <van-col>发布时间:{{detail.add_time | dateFormat('yyyy-MM-DD')}}</van-col>
                <van-col>点击:{{detail.click}}</van-col>
            </van-row>
            <van-row v-model="detail">
                <p class="content" v-html="detail.content"></p>
            </van-row>
            <van-row>
                <h2>发表评论</h2>
                <hr/>
            </van-row>
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
            <!-- <van-row v-for="item in comments" :key="item.id">
                <h6>第{{item.count}}楼 用户:匿名用户 发表时间:{{item.date | dateFormat('yyyy-MM-DD')}}</h6>
                <p class="text">{{item.message}}</p>
                <van-row type="flex" justify="center"><van-loading size="24px" >加载中...</van-loading></van-row>
            </van-row> -->
            <comment :comments="comments"></comment>
        </div>
    </div>
</template>
<script>
import NavBar from '../common/NavBar'
import Comment from '../common/comments'
import { Notify } from 'vant'
export default {
  props: [],
  data () {
    return {
      detail: [],
      comments: [],
      message: '',
      date: new Date(),
      count: '',
      id: ''
    }
  },
  components: {
    NavBar,
    Comment
  },
  async mounted () {
    console.log(window.location.search.split('?'))
    this.id = window.location.search.split('?')[1]
    console.log(this.id)
    const { data: res } = await this.$http.get('/api/getnew/' + this.id)
    // console.log(res)
    this.detail = res.message['0']
    console.log(this.detail)
  },
  methods: {
    published () {
    //   console.log(123)
      if (this.message === '') {
        // 警告通知
        Notify({ type: 'warning', message: '请输入评论内容' })
        return
      }
      if (this.comments.length >= 0) {
        this.count++
        this.comments.push({
          count: this.count,
          date: this.date,
          message: this.message
        })
        this.message = ''
      }
      console.log(this.comments)
      this.$emit('loading')
    }
  }
}
</script>
<style lang="less" scoped>
.box{
    margin: 0 10px;
}
.title{
    color: #1788FA;
    font-size: 16px
}

/deep/.date{
    color: #1788FA;
    border-bottom: 2px solid #D8D8D8;
    padding: 10px 0;
    font-size: 14px;
}
.content{
    font-size: 16px;
    color: #646464;
    margin-bottom: 0;
}
.van-field{
    border: 1px solid #E0E0E0;
    height: 100px;
}
.van-button{
    margin: 5px 0;
}
h2{
    font-size: 24px;
}
/deep/.van-loading{
    margin: 10px;
}
</style>
