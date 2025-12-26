const mdFileName = 'special-config'

const mdContent = {
  一级标题: '专题配置',
  二级标题: '专题概念',
  输出1用块引: '我们把一组专题的图层组件称为专题，通俗来讲就是只看某一组图层的显示，构建出来的地图场景。',

  输出2用二级标题: '如何配置？',
  输出2用块引: '在 special 文件夹中找到 special.setting.js, 对导出的 ``speicalSetting`` 对象进行配置',

  输出3用二级标题: '演示',
  单一代码块: {
    type: 'file',
    codeType: 'js',
    file: '/temp/special/ys.js',
  },
  输出3用原样输出: '其中图层名称就是创建图层``唯一名字`` ``Layer.name``, 专题名称也是唯一，建议合理取名',

  输出4用二级标题: '调用方式',
  输出4用单一代码块: {
    type: 'file',
    codeType: 'js',
    file: '/temp/special/dyfs.js',
  },

  输出7用二级标题: '默认专题',
  输出7用单一代码块: {
    type: 'file',
    codeType: 'js',
    file: '/temp/special/mrzt.js',
  },


  输出5用二级标题: '专题方法',
  输出5用表格: {
    列: [
      {
        label: '参数',
        prop: 'key',
      },
      {
        label: '说明',
        prop: 'desc',
      },
      {
        label: '类型',
        prop: 'type',
      },
      {
        label: '可选值',
        prop: 'params',
      },
      {
        label: '默认值',
        prop: 'defaultValue',
      },
      {
        label: '所属生效范围',
        prop: 'rangeName',
      },
    ],
    数据: [
      {
        key: 'open',
        desc: '打开专题',
        type: 'Function',
        params: '配置在special.setting.js 的专题名称',
        defaultValue: '',
      }
    ]
  },

  输出6用二级标题: '专题全局事件',
  输出6用表格: {
    列: [
      {
        label: '参数',
        prop: 'key',
      },
      {
        label: '说明',
        prop: 'desc',
      },
      {
        label: '类型',
        prop: 'type',
      },
      {
        label: '可选值',
        prop: 'params',
      },
      {
        label: '默认值',
        prop: 'defaultValue',
      },
      {
        label: '所属生效范围',
        prop: 'rangeName',
      },
    ],
    数据: [
      {
        key: 'layer.open',
        desc: '打开专题',
        type: 'Event',
        params: '当调用open 方法，或者 进入地图有配置默认专题的情况下触发',
        defaultValue: '',
      }
    ]
  },
  输出6用三级标题: '使用方式',
  输出6用单一代码块: {
    type: 'file',
    codeType: 'js',
    file: '/temp/special/layer.open.event.js',
  },}

const content = {
  // 导出md 名字
  mdFileName,
  // 导出md 内容
  mdContent,
}

export default content
