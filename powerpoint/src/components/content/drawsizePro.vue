<template lang="pug">
  div
    .myCharts(:id="'chart' + this.echartsId" :class="[isActive?'myChartsLook':'myChartsOutline']" @click="todraw")
    //- el-button( @click="handleDownload" style="display:flex;margin:0 auto" v-if="isshow") 下载数据
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'
import Enum from '@/apis/enum'
export default {
  name: 'drawSziePro',
  props: {
    dialogData: { type: Object }, // sizePro整体数据
    dataZoom: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isshow: { type: Boolean, default: false }
  },
  data () {
    return {
      kindType: [
        {
          value: 0,
          label: 'pie'
        },
        {
          value: 1,
          label: 'bar'
        },
        {
          value: 2,
          label: 'line'
        }
      ],
      echartsId: this.dialogData._id + `${Math.random()}`,
      dataUrl: ''
    }
  },
  methods: {
    // 绘制饼图的准备
    drawPie () {
      const legendData = []
      const pieData = []
      for (const i of this.dialogData.products) {
        legendData.push(i.productName)
        if (i.series && i.series.length > 0) {
          const pieObj = {
            name: i.productName,
            value: 0
          }
          for (const j of i.series) {
            pieObj.value += j.size
          }
          pieData.push(pieObj)
        }
      }
      const option = {
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        title: {
          text: this.dialogData.title,
          x: 'center'
        },
        grid: {
          bottom: 150,
          top: 150
        },
        tooltip: {
          trigger: 'item',
          formatter: `{b} : {c}${this.dialogData.products[0].unitName}/${Enum.getLabel(this.dialogData.products[0].unit, Enum.UNITS)}} ({d}%)`
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: legendData
        },
        series: [
          {
            type: 'pie',
            data: pieData
          }
        ]
      }
      if (this.isActive) {
        option.toolbox.feature.saveAsImage = {}
      }
      const myChart = echarts.init(document.getElementById('chart' + this.echartsId))
      this.$nextTick(() => {
        // document.getElementById('chart' + this.echartsId).style.height = 400 + 'px'
        // myChart.resize()
        myChart.setOption(option, true)
        this.dataUrl = myChart.getDataURL()
        // this.getUrl()
      })
    },
    // 绘制柱状、折线图的准备
    drawBar () {
      const legendData = []
      const xAxisArr = [] // 取出所以的x轴
      const seriesData = []
      const predictive = [] // 用来存放预测时间
      let gridx = 75
      let gridx2 = 75
      for (const i of this.dialogData.products) {
        legendData.push(i.productName)
        if (i.series && i.series.length > 0) {
          for (const j of i.series) {
            xAxisArr.push(j.year)
            if (j.predictive === true || j.predictive === 1) {
              predictive.push(j.year + (this.dialogData.XunitName || ''))
            }
          }
        }
      }

      // 获取完整的x轴年份从小到大排序
      let xAxisData = [...new Set(xAxisArr)]
      // 改变x轴的预测时间
      // console.log(res)
      // 获取series数据
      const yAxisData = [] // y轴设置
      let offsetLeft = 0
      let offsetRight = 0
      let yAxisIndex = 0
      // for (let i of this.dialogData.products) { // 遍历products
      for (let i = 0; i < this.dialogData.products.length; i++) {
        const xAxisObj = xAxisData.map(item => {
          return { year: item, value: 0 }
        })
        let seriess = []
        const position = this.dialogData.products[i].yAxis === 0 ? 'left' : 'right'
        const yObj = {
          name: Enum.getLabel(this.dialogData.products[i].unit, Enum.UNITS) + '/' + this.dialogData.products[i].unitName,
          type: 'value',
          position: position
        }
        // yAxisIndex = i
        if (this.dialogData.products[i].unitName !== this.dialogData.products[0].unitName || this.dialogData.products[i].unit !== this.dialogData.products[0].unit) { // 只有俩个且以上的数据才能进来
          yAxisIndex = i
          if (this.dialogData.products[0].yAxis === 0) { // 如果第一个是左边
            if (position === 'left') {
              offsetLeft = offsetLeft + 1
              yObj.offset = offsetLeft * 70
              gridx += 75
            } else {
              yObj.offset = offsetRight * 70
              offsetRight = offsetRight + 1
              gridx2 += 75
            }
          } else {
            if (position === 'right') {
              offsetRight = offsetRight + 1
              yObj.offset = offsetRight * 70
              gridx2 += 75
            } else {
              yObj.offset = offsetLeft * 70
              offsetLeft = offsetLeft + 1
              gridx += 75
            }
          }
        } else {
          // yAxisIndex = i
          if (position === this.dialogData.products[0].yAxis) {
            break
          } else {
            if (this.dialogData.products[0].yAxis === 0) { // 如果第一个是左边
              if (position === 'right') {
                yObj.offset = offsetRight * 70
                offsetRight = offsetRight + 1
                gridx2 += 75
              }
            } else {
              if (position === 'left') {
                yObj.offset = offsetLeft * 70
                offsetLeft = offsetLeft + 1
                gridx += 75
              }
            }
          }
        }
        yAxisData.push(yObj)
        if (this.dialogData.products[i].series && this.dialogData.products[i].series.length > 0) {
          for (const yearData of xAxisObj) {
            for (const j of this.dialogData.products[i].series) {
              if (yearData.year === j.year) {
                yearData.value = j.size
              }
            }
          }
        }
        seriess = xAxisObj.map(item => {
          return item.value
        })
        const obj = {
          name: this.dialogData.products[i].productName,
          data: seriess,
          type: Enum.getLabel(this.dialogData.products[i].kind, this.kindType),
          yAxisIndex: yAxisIndex,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'inside'
              }
            }
          }
        }
        // 只对类型为bar进行堆叠
        if (this.dialogData.barType === 1) {
          if (obj.type === 'bar') {
            obj.stack = 'aa'
          }
        }
        seriesData.push(obj)
      }
      // 在produces为空的情况下
      if (yAxisData.length === 0) {
        yAxisData.push({})
      }
      xAxisData = xAxisData.map(item => {
        return item + (this.dialogData.XunitName || '')
      }).map(item => {
        return predictive.indexOf(item) === -1 ? item : `${item}预`
      })
      // console.log(11,yAxisData,22)
      const option = {
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        title: {
          text: this.dialogData.title
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          x: gridx,
          x2: gridx2
        },
        legend: {
          data: legendData,
          top: '6%'
        },
        xAxis: {
          data: xAxisData,
          axisLabel: {
            show: true,
            formatter: function (val) {
              if (val.length > 5 && xAxisData.length > 6) {
                val = val.slice(0, 5) + '\n' + val.slice(5)
              }
              return val.indexOf('预') === -1 ? val : '{value|' + val + '}'
              // return val
            },
            rich: {
              value: {
                color: 'red'
              }
            },
            interval: 0
          }
        },
        yAxis: yAxisData,
        series: seriesData
      }
      if (this.dataZoom) {
        option.dataZoom = { // 缩放区域
          show: true,
          start: 0,
          end: 100
        }
      }
      if (this.isActive) {
        option.toolbox.feature.saveAsImage = {}
      }
      const myChart = echarts.init(document.getElementById('chart' + this.echartsId))
      this.$nextTick(() => {
        myChart.setOption(option, true)
      })
    },
    handleDownload () {
      let str = this.dialogData.title + '\r\n单位' + `${this.dialogData.products[0].unitName}/${Enum.getLabel(this.dialogData.products[0].unit, Enum.UNITS)}` + '\r\n年,数据,是否预测\r\n'
      for (const products of this.dialogData.products) {
        str += `产品名称${products.productName}\r\n`
        for (const detail of products.series) {
          str += `${detail.year},${detail.size},${detail.predictive ? '预测' : ''}\r\n`
        }
        str += '\r\n'
      }
      const a = 'data:text/csv;charset=utf-8,\ufeff' + str.toString()
      const link = document.createElement('a')
      link.setAttribute('href', a)
      const filename = this.dialogData.title
      link.setAttribute('download', filename + '.csv')
      link.click()
    },
    todraw () {
      const myChart = echarts.init(document.getElementById('chart' + this.echartsId))
      this.$nextTick(() => {
        var url = myChart.getDataURL().toString('base64')
        url = url.split('base64')[1]

        console.log(url)
        window.Office.context.document.setSelectedDataAsync(url,
          { coercionType: window.Office.CoercionType.Image },
          (asyncResult) => {

          })
      })

      // console.log('111111111111111111', myChart.getDataURL())
    }
  },
  // mounted () {
  //   if (this.dialogData.products && this.dialogData.products.length) {
  //     if (this.dialogData.products[0].kind === 0) {
  //       this.drawPie()
  //     } else {
  //       this.drawBar()
  //     }
  //   }
  // },
  watch: {
    dialogData: {
      handler: function (val) {
        this.dialogData = val
        this.$nextTick(() => {
          if (this.dialogData.products && this.dialogData.products.length) {
            if (this.dialogData.products[0].kind === 0) {
              this.drawPie()
            } else {
              this.drawBar()
            }
          }
        })
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scope>
.myChartsLook {
  height: 55vh;
  width: 100%;
}
.myChartsOutline {
  height: 24vh;
  width: 247px;
}
</style>
