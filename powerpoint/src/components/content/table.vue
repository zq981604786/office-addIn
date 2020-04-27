<template lang="pug">
  .Table
    item
      | 表说
</template>
<script>
import Item from './item'
export default {
  components: { Item },
  props: {
    data: { type: Object }
  },
  mounted () {
    console.log('table->', this.data.name)
  }
}
</script>
