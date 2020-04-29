<template lang="pug">
  div
    div(style='height: 206px;border-bottom: 4px solid rgba(240,240,240,1);')
      .size-img.fx
        .img-name.fx(style='padding-left: 19px;')
          img.slide(src="@/assets/slide.png" )
          p.slide-txt 图片
        .img-select.fx(style='padding-right: 19px;')
          .select-border.center(@click="handleSelectSize")
            img.check(src="@/assets/check.png" v-if="isSizeChoose")
          p.select-txt 应用
      .size(style='height:142px')
        drawSize(:dialogData="dialogData" ref="drawSziePro" :isshow="true")
    div(style='height: 204px;margin-top:14px;border-bottom: 4px solid rgba(240,240,240,1);')
      .size-img.fx
        .img-name.fx(style='padding-left: 19px;')
          img.slide(src="@/assets/slide.png" )
          p.slide-txt(style='width:75px') 配色方案
      ColorMatching
      .line
      ColorMatching
      .line
      ColorMatching
    div(style='height: 268px;margin-top:14px')
      .size-img.fx
        .img-name.fx(style='padding-left: 19px;')
          img.slide(src="@/assets/slide.png" )
          p.slide-txt(style='width:75px') 标题
      .radio-selectt.fx(@click="selectRadio(0)")
        .radio.center
          .selected(v-if="selected === 0")
        p 不插入
      .line
      .radio-selectt.fx(@click="selectRadio(1)")
        .radio.center
          .selected(v-if="selected === 1")
        p 插入为文本
      .line
      .radio-selectt.fx(@click="selectRadio(2)")
        .radio.center
          .selected(v-if="selected === 2")
        p 插入为文本
      .check-box(style='margin-left: 46px;')
        .img-select.fx(style='padding-right: 19px;margin-bottom: 10px;')
          .select-border.center(@click="handleAddCheckBox(0)")
            img.check(src="@/assets/check.png" v-if="selected === 2 && checkBox.indexOf(0) !== -1")
          p.select-txt 图例
        .img-select.fx(style='padding-right: 19px;margin-bottom: 10px;')
          .select-border.center(@click="handleAddCheckBox(1)")
            img.check(src="@/assets/check.png" v-if="selected === 2 && checkBox.indexOf(1) !== -1")
          p.select-txt(style='width:50px') 单位(1)
        .img-select.fx(style='padding-right: 19px;margin-bottom: 10px;')
          .select-border.center(@click="handleAddCheckBox(2)")
            img.check(src="@/assets/check.png" v-if="selected === 2 && checkBox.indexOf(2) !== -1")
          p.select-txt(style='width:50px') 单位(2)
</template>

<script>
import drawSize from './drawsizePro'
import { sizepro } from '@/apis/index'
import ColorMatching from '../size/ColorMatching'
export default {
  components: { drawSize, ColorMatching },
  data () {
    return {
      isSizeChoose: false,
      dialogData: sizepro[0],
      selected: 0,
      checkBox: []
    }
  },
  methods: {
    handleSelectSize () {
      this.isSizeChoose = !this.isSizeChoose
      if (this.isSizeChoose) {
        this.$refs.drawSziePro.todraw()
      }
    },
    selectRadio (radio) {
      this.selected = radio
      if (radio !== 2) {
        this.checkBox = []
      }
    },
    handleAddCheckBox (box) {
      this.selected = 2
      if (this.checkBox.indexOf(box) === -1) {
        this.checkBox.push(box)
      } else {
        for (let i = 0; i < this.checkBox.length; i++) {
          if (this.checkBox[i] === box) {
            this.checkBox.splice(i, 1)
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  position: relative;
}
.back{
  height:16px;
  width: 9px;
  position: absolute;
  left: 19px;
}
.title{
  text-align: center;
  height:25px;
  width: 36px;
  font-size:18px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:25px;
}
</style>
<style scoped>
.size-img{
  justify-content: space-between;
}
.select-border{
  width:16px;
  height:16px;
  border-radius:2px;
  border:1px solid rgba(184,184,184,1);
}
.fx{
  display: flex;
}
.check{
  width: 12px;
  height: 10px;
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide{
  height: 14px;
  width: 2px;
}
.slide-txt{
  width:32px;
  height:22px;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:15px;
  margin-left: 10px;
}
.select-txt{
  width:28px;
  height:14px;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:17px;
  margin-left: 10px;
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
.radio p{
  width: 100px;
  margin-left: 25px;
}
.selected{
  width:10px;
  height:10px;
  background:rgba(232,57,41,1);
  border-radius:6px;
}
.line{
  height:1px;
  background:rgba(240,240,240,1);
  margin:0 14px 15px 14px;
}
</style>
