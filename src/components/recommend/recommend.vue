<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" :data="disclist" ref="scroll">
      <div>
      <div class="slider-wrapper" v-if="recommend.length">
        <slider>
          <div v-for="item in recommend">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" @load = "loadImage" class="needsclick">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
          <li v-for="li in disclist" class="recommend-item">
            <div class="icon">
              <img v-lazy="li.imgurl">
            </div>
            <div class="item">
              <p class="item-title" v-html="li.dissname"></p>
              <p class="item-context" v-html="li.introduction"></p>
            </div>
          </li>
        </ul>
      </div>
      
      </div>
      <div class="loading-container">
        <loading v-show="!disclist.length"></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import loading from 'base/loading/loading'
export default {
  data () {
    return {
      recommend: [],
      disclist: []
    }
  },
  components: {
    slider,
    Scroll,
    loading
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommend = res.data.slider
          // console.log(res.data.slider)
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.disclist = res.data.list
          // console.log(res.data.list)
        }
      })
    },
    loadImage () {
      if (!this.isloadImage) {
        this.$refs.scroll.refresh()
        this.isloadImage = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "sass">
@import 'recommend'

.loading-container
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%)
  .loading
    
</style>
