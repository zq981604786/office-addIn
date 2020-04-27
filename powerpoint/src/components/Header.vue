<template lang="pug">
  #header
    img(src="@/assets/logo.svg",type="image/svg+xml")
    b-input-group(size="sm")
      b-form-input#search_box(v-model="search_keyword",@click="handleClickSearchBox",@keyup.enter="submit",type="search",size="sm", icon="exclamation-search", placeholder='20万+海量资源')
      b-input-group-append(is-text)
        b-icon(icon="search" @click="submit")
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      search_keyword: ''
    }
  },
  methods: {
    submit: function () {
      this.$emit('search', this.search_keyword)
      console.log('按钮搜索' + this.search_keyword)
      // console.log(this.search_keyword)
    },
    handleClickSearchBox () {
      if (window.Office.context.document.getSelectedDataAsync) {
        window.Office.context.document.getSelectedDataAsync(window.Office.CoercionType.Text,
          (result) => {
            if (result.status === window.Office.AsyncResultStatus.Succeeded) {
              // showNotification('选定的文本为:', '"' + result.value + '"')
              this.search_keyword = result.value
            } else {
              this.search_keyword = '???'
              // showNotification('错误:', result.error.message)
            }
          }
        )
      } else {
        // this.search_keyword = ''
        // 也许并没有在Office中使用
        this.search_keyword = 'xxx'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#header {
  padding: 10px 0;
  display:flex;
  flex-direction: column;
  align-items: center;
}
#search_box {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
img {
  padding-bottom: 10px;
  width: 40%;
}
.input-group-append {
  .input-group-text {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
</style>
