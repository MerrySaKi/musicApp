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
@font-face
  font-family: 'DroidSansbace';
  src: url('//cdn.webfont.youziku.com/webfonts/nomal/104699/45824/595a0ab1f629d810646c0cdc.gif?r=47466802231');
  src: url('//cdn.webfont.youziku.com/webfonts/nomal/104699/45824/595a0ab1f629d810646c0cdc.gif?r=47466802231?#iefix') format('embedded-opentype'), url('//cdn.webfont.youziku.com/webfonts/nomal/104699/45824/595a0ab1f629d810646c0cdc.bmp?r=47466802231') format('woff'), url('//cdn.webfont.youziku.com/webfonts/nomal/104699/45824/595a0ab1f629d810646c0cdc.jpg?r=47466802231') format('truetype'), url('#DroidSans') format('svg'); 
.web-font
  font-family: 'DroidSansbace';
h1
  padding: 20px;
  margin: 0;
</style>
