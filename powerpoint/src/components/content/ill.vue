<template lang="pug">
  .Illustration
    item(@click="handleClick")
      .square
        img(:src="data.image")
      .text
        h4 {{data.name}}
        p {{data.description}}
</template>
<script>
import Item from './item'
import axios from 'axios'
export default {
  components: { Item },
  props: {
    data: { type: Object }
  },
  mounted () {
    console.log('ill->', this.data.name)
  },
  methods: {
    handleClick () {
      const url = 'https://oss.leadleo.com/leadleo_www/2020/02/04/e81e0160-4714-11ea-9bc4-4b346dec7b8a.jpg?x-oss-process=image/resize,w_440'
      axios.get('/api/', { params: url }).then(doc => {
        console.log(doc)
        if (window.Office.context.document.setSelectedDataAsync) {
          window.Office.context.document.setSelectedDataAsync(doc.data,
            { coercionType: window.Office.CoercionType.Image },
            (asyncResult) => {

            })
        }
      })
      // if (window.Office.context.document.setSelectedDataAsync) {
      //   window.Office.context.document.setSelectedDataAsync(this.data.image,
      //     { coercionType: window.Office.CoercionType.Text },
      //     (asyncResult) => {

      //     })
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.square{
  width:20vh;
  height:20vh;
  overflow: hidden;
  float:left;
}
.text{
float:left;
margin-left: 5px;
width:50vw;
}
img{
  height:100%;
}
</style>
