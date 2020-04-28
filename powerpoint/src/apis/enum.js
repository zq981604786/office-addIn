// 报告状态
const BRIEF_STATUS = [{
  value: 0,
  label: '草稿'
}, {
  value: -1,
  label: '退回修改'
}, {
  value: 1,
  label: '提交待审核'
}, {
  value: 2,
  label: '已经发布'
}]

const PREDICTION = [{
  value: 0,
  label: '未披露'
}, {
  value: 1,
  label: '非上市披露'
}, {
  value: 2,
  label: '上市披露'
}]

const AUTHORITY = [{
  value: 0,
  label: '非权威'
}, {
  value: 1,
  label: '第三方'
}, {
  value: 2,
  label: '权威'
}]

const SOURCE = [{
  value: 0,
  label: '沙利文研究院'
}, {
  value: 1,
  label: '头豹研究院'
}]

const REPORT_TYPE = [{
  label: '一级市场',
  value: '一级市场'
}, {
  label: '二级市场',
  value: '二级市场'
}]

const BRIEF_ATTRIBUTE = [{
  value: 0,
  label: '限时免费'
}, {
  value: 1,
  label: '普通报告'
}, {
  value: 2,
  label: '精品报告'
}, {
  value: 3,
  label: '即将上架'
}]

const SIZE_TYPE = [{
  value: 0,
  label: '普通'
}, {
  value: 1,
  label: '统计后（算法）数据'
}]

const STATUS = [{
  value: 0,
  label: '草稿'
}, {
  value: -1,
  label: '退回修改'
}, {
  value: 1,
  label: '提交待审核'
}, {
  value: 2,
  label: '审核通过'
}]

const ILL_SOURCE = [
  { value: '头豹研究院绘制' },
  { value: '沙利文研究院绘制' },
  { value: 'tbTEAM软件采编，头豹数据中心编制' }
]

const UNIT_NAME = [
  // 货币
  { value: '人民币元', label: '人民币元' },
  { value: '港币', label: '港币' },
  { value: '美元', label: '美元' },
  { value: '日元', label: '日元' },
  { value: '欧元', label: '欧元' },
  { value: '英镑', label: '英镑' },
  // 计量单位
  { value: '公斤', label: '公斤' },
  { value: '升', label: '升' },
  { value: '平方米', label: '平方米' },
  { value: '米', label: '米' },
  // 量词
  { value: '人', label: '人' },
  { value: '家', label: '家' },
  { value: '辆', label: '辆' },
  { value: '个', label: '个' },
  { value: '件', label: '件' },
  { value: '套', label: '套' },
  { value: '只', label: '只' },
  { value: '枚', label: '枚' },
  { value: '把', label: '把' },

  { value: '公顷', label: '公顷' },
  { value: '平方公里', label: '平方公里' },
  { value: '%', label: '%' },

  // 其他
  { value: '人次', label: '人次' },
  { value: '公吨/人', label: '公吨/人' },
  { value: '公吨/天', label: '公吨/天' }

]

const UNITS = [{
  value: 1,
  label: '个'
}, {
  value: Math.pow(10, 1),
  label: '十'
}, {
  value: Math.pow(10, 2),
  label: '百'
}, {
  value: Math.pow(10, 3),
  label: '千'
}, {
  value: Math.pow(10, 4),
  label: '万'
}, {
  value: Math.pow(10, 5),
  label: '十万'
}, {
  value: Math.pow(10, 6),
  label: '百万'
}, {
  value: Math.pow(10, 7),
  label: '千万'
}, {
  value: Math.pow(10, 8),
  label: '亿'
}, {
  value: Math.pow(10, 9),
  label: '十亿'
}, {
  value: Math.pow(10, 11),
  label: '千亿'
}, {
  value: Math.pow(10, 12),
  label: '万亿'
}
]

const getLabel = (num, arr) => {
  for (const i in arr) {
    if (Number(arr[i].value) === num) {
      return arr[i].label
    }
  }
}

const pickerDate = (d) => {
  const end = new Date()
  const start = new Date()
  start.setTime(start.getTime() - 3600 * 1000 * 24 * d)
  return [start, end]
}

const pickerOptions = {
  shortcuts: [{
    text: '最近一周',
    onClick (picker) {
      picker.$emit('pick', pickerDate(7))
    }
  }, {
    text: '最近一个月',
    onClick (picker) {
      picker.$emit('pick', pickerDate(30))
    }
  }, {
    text: '最近三个月',
    onClick (picker) {
      picker.$emit('pick', pickerDate(90))
    }
  }]
}

const INDIVIDUAL_GENDER = [

  { value: 0, label: '男' },
  { value: 1, label: '女' },
  { value: 2, label: '未知' }

]

const IllSource = [
  { value: '头豹研究院绘制' },
  { value: '沙利文研究院绘制' },
  { value: 'tbTEAM软件采编，头豹数据中心编制' }
]
const _CLASS = [
  { value: -1, label: '文本' },
  { value: 0, label: '图说' },
  { value: 1, label: '表说' },
  { value: 2, label: 'size' },
  { value: 3, label: '专家说' }

]

const ARTICLE_TYPE = [
  { value: 0, label: '新闻稿' },
  { value: 1, label: '园区' },
  { value: 2, label: '会议' },
  { value: 3, label: '项目' }

]

const COLORS = [
  '#0e72cc',
  '#6ca30f',
  '#f59311',
  '#fa4343',
  '#16afcc',
  '#85c021',
  '#d12a6a',
  '#0e72cc',
  '#6ca30f',
  '#f59311',
  '#fa4343',
  '#16afcc'
]

// memo类型
const MEMO_CLASS = [{
  value: 0,
  label: '一手'
}, {
  value: 1,
  label: '二手'
}, {
  value: 2,
  label: '数据模型'
}, {
  value: 3,
  label: '其他'
}]

export default {
  _CLASS,
  STATUS,
  BRIEF_STATUS,
  BRIEF_ATTRIBUTE,
  UNIT_NAME,
  PREDICTION,
  AUTHORITY,
  UNITS,
  SIZE_TYPE,
  pickerOptions,
  pickerDate,
  SOURCE,
  getLabel,
  REPORT_TYPE,
  ILL_SOURCE,
  IllSource,
  INDIVIDUAL_GENDER,
  COLORS,
  ARTICLE_TYPE,
  MEMO_CLASS
}
