<template lang="pug">
  .item(@click="handleClick")
    b-icon(icon="chevron-compact-right")
    .box
      slot
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$emit('click', 'aa')
    }
  }
}
</script>
<style lang="scss" scoped>
.item{
  position: relative;

    .b-icon {
    position: absolute;
    right: -10px;
    top: 9vh;
  }
.box {
  height: 20vh;
  // border: 1px solid #ccc;
  margin-top:8px;
  overflow: hidden;
  display:flex;
  flex-direction: row;
}
}
</style>
