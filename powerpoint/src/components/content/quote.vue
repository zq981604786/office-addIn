<template lang="pug">
  .Quote
    item
      | 专家说
</template>
<script>
import Item from './item'
export default {
  components: { Item },
  props: {
    data: { type: Object }
  },
  mounted () {
    console.log('quote->', this.data.name)
  }
}
</script>
