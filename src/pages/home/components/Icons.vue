<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(Sitem, index) of swiperList" :key="index">
        <div class="icon" v-for='item in Sitem' :key='item.id'>
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl'/>
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      },
      list: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '必游榜单'
        }, {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        }, {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '主题乐园'
        }, {
          id: 5,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        }, {
          id: 6,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫'
        }, {
          id: 7,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        }, {
          id: 8,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
          desc: '公园'
        }, {
          id: 9,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场'
        }, {
          id: 10,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    swiperList: function () {
      let swList = []
      this.list.forEach(function (item, index) {
        let i = Math.floor(index / 8)
        if (!swList[i]) {
          swList[i] = []
        }
        swList[i].push(item)
      })
      return swList
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 55%
    position relative
    .swiper-pagination-bullets
      position absolute
      bottom 6px
  .icons
    padding-top .1rem
    height 0
    padding-bottom 50%
    background #fff
    .icon
      overflow: hidden
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        right 0
        left 0
        bottom .44rem
        box-sizing border-box
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        right 0
        left 0
        bottom 0
        height .44rem
        text-align center
        color #333
</style>
