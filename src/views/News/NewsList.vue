<template>
    <div>
        <div><nav-bar></nav-bar></div>
        <div class="box">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            >
            <ul>
                <li v-for="item in newslist" :key="item.id" @click="newsdetails(item.id)">
                    <van-card
                    :thumb="item.img_url"
                    >
                    <template #tags>
                        <van-row>
                        <van-col span="24"><h3>{{item.title}}</h3></van-col>
                        </van-row>
                        <van-row type="flex" justify="space-between">
                            <van-col span="18">发布时间：{{item.add_time | dateFormat('yyyy-MM-DD')}}</van-col>
                            <van-col span="6">点击：{{item.click}}</van-col>
                        </van-row>
                    </template>
                    </van-card>
                </li>
            </ul>
            </van-list>
            </van-pull-refresh>
            <!-- <van-card
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
            <template #tags>
                <van-row>
                <van-col span="24"><h3>标题</h3></van-col>
                </van-row>
                <van-row type="flex" justify="space-between">
                    <van-col span="18">发布时间：</van-col>
                    <van-col span="6">点击：1</van-col>
                </van-row>
            </template>
            </van-card> -->
            <tab-bar></tab-bar>
        </div>
    </div>
</template>
<script>
import NavBar from '../common/NavBar'
import TabBar from '../../components/tabbar/TabBar'
export default {
  props: [],
  data () {
    return {
      newslist: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  components: {
    NavBar,
    TabBar
  },
  async mounted () {
    const { data: res } = await this.$http.get('/api/getnewslist')
    console.log(res)
    this.newslist = res.message
  },
  methods: {
    onLoad () {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(async () => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        const { data: res } = await this.$http.get('/api/getnewslist')
        this.newslist = res.message
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.newslist.length >= res.message.length) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    newsdetails (id) {
      this.$router.push('/newsdetails?' + id)
    }
  }
}
</script>
<style lang="less" scoped>
.box{
    margin: 0 10px;
}
.van-card{
    border-bottom: 2px solid #F4F4F4;
    font-size: 14px;
}
.van-row:nth-child(2){
width: 100%;
color: #5189FF;
}
</style>
