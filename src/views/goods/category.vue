<template>
    <div>
        <div>
            <van-nav-bar title="分类" left-arrow>
            <template #right>
                <van-icon name="search" size="28" />
            </template>
            </van-nav-bar>
        </div>
        <div>
        <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
        <template #content>
            <van-row v-if="active === 0" type="flex" justify="center" class="box">
              <van-col span="24">
                <van-row calss="image">
                <van-image
                src="https://img.yzcdn.cn/vant/apple-2.jpg"
                />
                </van-row>
                <van-divider
                  :style="{ color: '#484848', borderColor: '#484848', padding: '0 60px' }"
                >
                  手机
                </van-divider>
                <van-col span="8">1</van-col>
                <van-col span="8">2</van-col>
                <van-col span="8">3</van-col>
                <van-col span="8">4</van-col>
                <van-col span="8">5</van-col>
                <van-col span="8">6</van-col>
                <van-col span="8">7</van-col>
                <van-col span="8">8</van-col>
                <van-col span="8">9</van-col>
              </van-col>
            </van-row>
            <van-image
            v-if="active === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
            />
        </template>
        </van-tree-select>
        </div>
    </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {
      active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
/deep/.van-nav-bar{
  background-color: #F2F2F2;
}
/deep/.van-nav-bar .van-icon{
  color: #7A7A7A;
  font-size: 24px;
}
/deep/.van-nav-bar__title{
  color: #7A7A7A;
}
/deep/.van-sidebar.van-tree-select__nav {
    border-right: 2px solid #F3F3F3;
}
// .van-sidebar{
//     width: 80px;
// }
.van-sidebar-item--select {
    color: #FB7E35;
}
.van-sidebar-item{
    text-align: center;
    background-color: #fff;
}
.van-sidebar-item--select::before{
    background-color: #fff;
}
.van-tree-select__nav{
    background-color: #fff;
}
.van-tree-select__content{
    flex:3
}
.box{
  padding: 20px 18px;
}
van-image{
  width: 100%;
}
</style>
