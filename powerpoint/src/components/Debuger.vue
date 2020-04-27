<template lang="pug">
  #debug
    pre {{content}}
</template>
<script>
// const old_log = console.log
export default {
  name: 'debuger',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    console.log = (message) => {
      if (typeof message === 'object') {
        this.content += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '\n'
      } else {
        this.content += message + '\n'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#debug{
  top:0;
  left:0;
    position:absolute;
    opacity: .15;
    z-index: 9999;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    pointer-events: none;
}
</style>
