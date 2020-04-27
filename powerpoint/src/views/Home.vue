<template lang="pug">
  #home
    Header(@search="handleSearch")
    MainMenu
    ResultOfSearch(ref="Content")
    Footer
    Debuger
</template>
<script>
import Header from '@/components/Header.vue'
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import ResultOfSearch from '@/components/ResultOfSearch.vue'
import Debuger from '@/components/Debuger.vue'
export default {
  name: 'Home',
  components: {
    Header,
    MainMenu,
    ResultOfSearch,
    Footer,
    Debuger
  },
  methods: {
    handleSearch: function (keyword) {
      this.$refs.Content.search(keyword)
      console.log('用户搜索：' + keyword)
    }
  }
}
</script>
