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
            <!-- <van-row v-for="item in comments" :key="item.id">
                <h6>第{{item.count}}楼 用户:匿名用户 发表时间:{{item.date | dateFormat('yyyy-MM-DD')}}</h6>
                <p class="text">{{item.message}}</p>
                <van-row type="flex" justify="center"><van-loading size="24px" >加载中...</van-loading></van-row>
            </van-row> -->
            <comment :artid="id"></comment>
        </div>
        <div><tab-bar></tab-bar></div>
    </div>
</template>
<script>
import NavBar from '../common/NavBar'
import Comment from '../common/comments'
import TabBar from '../../components/tabbar/TabBar'
export default {
  props: [],
  data () {
    return {
      detail: [],
      id: ''
    }
  },
  components: {
    NavBar,
    Comment,
    TabBar
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
    border-bottom: 2px solid #D9D9D9;
    padding: 10px 0;
    font-size: 14px;
}
.content{
    font-size: 16px;
    color: #646464;
    margin-bottom: 0;
}
h2{
    font-size: 24px;
}
/deep/.van-loading{
    margin: 10px;
}
</style>
