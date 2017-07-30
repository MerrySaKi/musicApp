<template>
  <scroll class = "listview" :data = "data">
    <ul>
      <li v-for = "group in data" class="list-group">
        <h2 class="group-title">{{group.title}}</h2>
        <ul>
          <li v-for = "item in group.items" class="group-item">
            <img class="avatar" v-lazy="item.avator"/>
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="list-shortcut">
      <li v-for="item in getCutList">{{item}}</li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  components: {
    Scroll
  },
  computed: {
    getCutList () {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "sass">
@import 'listview'
</style>
