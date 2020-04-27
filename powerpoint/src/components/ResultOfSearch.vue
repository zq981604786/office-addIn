<template lang="pug">
  #result
    div(v-for="i in results" :key="i.id")
      component(v-bind:is="routerToComponent(i.id)" :data="i")
</template>
<script>
import { Ill, Quote, Size, Table_ } from './content'
import Mock from 'mockjs'
// const Random = Mock.Random
export default {
  name: 'Search',
  data () {
    // Random.cname()
    return {
      results: Mock.mock({
        'array|10': [{
          id: '@increment',
          name: '@ctitle()',
          description: '@cparagraph(1, 3)',
          image: 'https://picsum.photos/300/110?random=@natural(10000)'
        }]
      }).array
      // results: [{
      //   id: 1,
      //   name: '图说'
      // }, {
      //   id: 2,
      //   name: '数说'
      // }, {
      //   id: 3,
      //   name: '表说'
      // }, {
      //   id: 4,
      //   name: '专家说'
      // }]
    }
  },
  components: {
    Ill, Quote, Size, Table_
  },
  methods: {
    routerToComponent (id) {
      switch (id % 4) {
        case 0: return 'ill'
        case 1: return 'size'
        case 2: return 'table_'
        case 3: return 'quote'
      }
    },
    search (keyword) {
      console.log('-->', keyword)
      // Ajax请求远程数据
      // 根据数据的不同类型装载数据
    }
  }
}
</script>
<style lang="scss" scoped>
#result{
  padding-bottom: 50px;
}
</style>
