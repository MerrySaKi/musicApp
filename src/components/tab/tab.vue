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
  box-sizing: border-box;
  .tab-item
    display: inline-block;
    color: #fff;
    width: 25%;
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
    border-bottom: transparent solid 1px;
    font-family: 'DroidSansbace';
  .router-link-active
    border-bottom: 1px solid #fff;
</style>
