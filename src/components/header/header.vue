<template>
  <div class="my-header">
    <img :src="logo" class="logo-img"
    > 
  </div>
</template>

<script>

export default {
  data () {
    return {
      logo: require('common/image/logo.png')
    }
  }
}
</script>
a
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

$bgcolor: #33B3FF;
$logoFont: #fff;

.my-header 
  background: $bgcolor;
  color: $logoFont;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  
.logo
  margin: 0;
  font-size: 20px;

.logo-img
  height: 60%;
  vertical-align: middle;

</style>
