<template lang="pug">
  .size
    item
      | 数说
    drawSize(:dialogData="dialogData" ref="drawSziePro" :isshow="true")
</template>
<script>
import drawSize from './drawsizePro'
import Item from './item'
import { sizepro } from '@/apis/index'
export default {
  components: { Item, drawSize },
  props: {
    data: { type: Object }
  },
  data () {
    return {
      dialogData: sizepro[0]
    }
  },
  mounted () {
    // console.log('size->', sizepro)
  }
}
</script>
