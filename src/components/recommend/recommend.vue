<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper" v-if="recommend.length">
        <slider>
          <div v-for="item in recommend">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" >
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
import slider from 'base/slider/slider'

export default {
  data () {
    return {
      recommend: []
    }
  },
  components: {
    slider
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommend = res.data.slider
          // console.log(res.data.slider)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "sass">
.recommend
  position: fixed;
  width: 100%;
  top: 89px;
  bottom: 0;
  .recommend-list
    .list-title
      font-size: 20px;
      text-align: center;
      font-weight: 300;
      color: #fff;

</style>
