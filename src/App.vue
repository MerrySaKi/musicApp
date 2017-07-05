<template>
  <div id="app">
    <my-header></my-header>
    <my-tab></my-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MyHeader from './components/header/header'
import myTab from 'components/tab/tab'
export default {
  data () {
    return {
    }
  },
  components: {
    MyHeader,
    myTab
  }
}
</script>

<style lang="sass" type="text/css">
@import 'common/style/normalize'
@import 'common/style/main'

h1
  padding: 20px;
  margin: 0;
</style>
