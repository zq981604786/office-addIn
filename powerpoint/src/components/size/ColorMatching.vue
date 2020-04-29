<template lang="pug">
  .radio-selectt.fx(@click="selectRadio")
    .radio.center
      .selected(v-if="selected === value")
    ul(style='display:flex;width:80%;margin-left: -38px;margin-top: -4px;')
      li(style='width:34px;height:26px;list-style:none;background:red;border-radius:2px 0px 0px 2px;')
      li(style='width:34px;height:26px;list-style:none;background:yellow')
      li(style='width:34px;height:26px;list-style:none;background:red')
      li(style='width:34px;height:26px;list-style:none;background:yellow')
      li(style='width:34px;height:26px;list-style:none;background:red;border-radius:2px 0px 0px 2px;')
</template>

<script>
export default {
  props: {
    color: {
      type: Array,
      default: () => []
    },
    value: {
      type: String || Number,
      default: 0
    },
    selected: {
      type: String || Number,
      default: null
    }
  },
  methods: {
    selectRadio () {
      this.$emit('checkColorMatching', this.value)
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.selected{
  width:10px;
  height:10px;
  background:rgba(232,57,41,1);
  border-radius:6px;
}
.radio{
  width:16px;
  height:16px;
  border-radius:8px;
  border:1px solid rgba(184,184,184,1);
  margin-left: 14px;
  margin-right: 10px;
  margin-top: 2px;
}
.fx{
  display: flex;
}
</style>
