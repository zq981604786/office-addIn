<template lang="pug">
  .office-details
    header.header
      img.back(src="@/assets/back.png")
      .title {{title}}
    main
      slot
    footer.office-footer-details
      .introduction
        .introduction-left 简介信息
        .introduction-right
        .img-select.fx
          .select-border.center(@click="handleSelectSize" style="margin: 2px 10px 0px 0;")
            img.check(src="@/assets/check.png" v-if="isSizeChoose")
          p.select-txt 应用
      div.introduction-text {{describe}}
      b-button.introduction-insert 插入文档
      .introduction-footer
        .introduction-logo
        .introduction-footer-text 关注头豹研究院网站, 可免费查阅更多文章, 第一时间掌握最新资讯
</template>

<script>
export default {
  name: 'Child',
  props: {
    title: {
      type: String,
      default: '数说'
    },
    describe: {
      type: String,
      default: '此处显示的信息是图说的段落文字， 进行全部显示。'
    }
  },
  data () {
    return {
      isSizeChoose: false
    }
  },
  methods: {
    handleSelectSize () {
      this.isSizeChoose = !this.isSizeChoose
    }
  }
}
</script>

<style>

.header-title {
  text-align: center;
  font-size: 18px;
  color: #333;
  font-weight: 700;
  line-height: 43px;
}
.office-footer-details {
  margin-top: 20px;
  padding: 21px 20px 0;
  border-top: 4px solid rgba(240,240,240,1);
}
.introduction {
  display: flex;
  justify-content: space-between;
}
.introduction .introduction-left {
  font-size: 16px;
  font-weight: 700;
  padding-left: 10px;
  position: relative;
}
.introduction .introduction-left::after {
  display: block;
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  width: 2px;
  height: 16px;
  background-color: rgba(232,57,41,1);
}
.introduction .introduction-right  {
  font-size: 14px;
}
.introduction-text {
  font-size: 14px;
  padding-top: 14px;
}
.introduction-insert {
  width: 100%;
  margin-top: 30px;
  background-color:rgba(231,57,42,1);
  border: none;
}
.introduction-footer {
  width: 100%;
  height: 89px;
  margin-top: 18px;
  padding-top: 14px;
  background-color:rgba(248,248,248, .8);
}
.introduction-footer .introduction-logo {
  width: 46px;
  height: 26px;
  margin: 0 auto;
  background-color: red;
  background: url('../assets/logo.svg') no-repeat center;
  background-size: 85%;
}
.introduction-footer-text {
  width: 80%;
  margin: 0 auto;
  font-size: 10px;
  text-align: center;
  padding-top: 5px;
  color: #999;
}
.check{
  width: 12px;
  height: 10px;
}
.select-border{
  width:16px;
  height:16px;
  border-radius:2px;
  border:1px solid rgba(184,184,184,1);
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.fx{
  display: flex;
}
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  position: relative;
  border-bottom: 2px solid rgba(240,240,240,1);
  margin-bottom: 14px;
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
