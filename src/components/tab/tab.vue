<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推 荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌 手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排 行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜 索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tab
  display: flex;
  justify-content: space-around;
  font-size: 26px;
  background: rgba(255,255,255,0.2); 
  .tab-item
    display: inline-block;
    color: #3d3d3d;
    width: 25%;
    text-align: center;
    font-size: 16px;
    border-bottom:  #33B3FF solid 1px;
    transition: all .3s ease;
    height: 48px;
    line-height: 48px;
  .router-link-active
    border-bottom: 1px solid #fff;
    color: #fff;

</style>
