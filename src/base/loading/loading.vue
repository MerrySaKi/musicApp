<template>
  <div class="loading">
      <img src="./loading.svg">
    <p class="title">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .loading
    width: 100%;
    text-align: center;
    .title
      line-height: 14px;
      font-size: 14px;
      color: #fff;
      

</style>
