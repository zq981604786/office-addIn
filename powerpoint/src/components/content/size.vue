<template lang="pug">
  .size
    item
      | 数说
</template>
<script>
import Item from './item'
export default {
  components: { Item },
  props: {
    data: { type: Object }
  },
  mounted () {
    console.log('size->', this.data.name)
  }
}
</script>
