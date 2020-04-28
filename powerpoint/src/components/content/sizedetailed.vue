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
    div(style='height: 268px;margin-top:14px')
      .size-img.fx
        .img-name.fx(style='padding-left: 19px;')
          img.slide(src="@/assets/slide.png" )
          p.slide-txt(style='width:75px') 标题
</template>

<script>
import drawSize from './drawsizePro'
import { sizepro } from '@/apis/index'
export default {
  components: { drawSize },
  data () {
    return {
      isSizeChoose: false,
      dialogData: sizepro[0]
    }
  },
  methods: {
    handleSelectSize () {
      this.isSizeChoose = !this.isSizeChoose
      if (this.isSizeChoose) {
        this.$refs.drawSziePro.todraw()
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
</style>
