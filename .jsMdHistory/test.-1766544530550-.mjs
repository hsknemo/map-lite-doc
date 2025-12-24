const mdFileName = 'core-intro'

const mdContent = {
  一级标题: '代码介绍',
  二级标题: '基础封装的图层 layer 的基类文件',
  单一代码块: {
    type: 'file',
    codeType: 'js',
    file: '/temp/dmjs/ym.js',
  },
  输出2用二级标题: '入参介绍',
  输出2用表格: {
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
    ],
    数据: [
      {
        key: 'name',
        desc: '图层名称 必传字段 也是定义图层的名称',
        type: 'String',
        params: '',
        defaultValue: '',
      },
      {
        key: 'minZoom',
        desc: '图层最小缩放级别',
        type: 'Number',
        params: '',
        defaultValue: 10,
      },
      {
        key: 'maxZoom',
        desc: '图层最大缩放级别',
        type: 'Number',
        params: '',
        defaultValue: 24,
      },
      {
        key: 'visible',
        desc: '图层是否可见',
        type: 'String/Boolean',
        params: 'true、false、visibility、none',
        defaultValue: true,
      },
      {
        key: 'showTip',
        desc: '点击当前 图层元素是否弹出自定义页面',
        type: 'Boolean',
        params: 'true、false',
        defaultValue: true,
      },
      {
        key: 'imgData',
        desc: 'mapbox 类型地图加载点位图片',
        type: 'Array',
        params: '[{name: \'全局唯一的图片名称\'}， value: 图片路径}]',
        defaultValue: '[]',
      },
    ]
  },

  输出3用二级标题: '自身属性介绍',
  输出3用表格: {
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
    ],
    数据: [
      {
        key: 'cacheData',
        desc: '图层数据',
        type: 'Array',
        params: '',
        defaultValue: '',
      },
      {
        key: 'layerConfig',
        desc: '创建的图层类型 mapbox： 创建图层原始 layer 配置，默认创建点图层',
        type: 'Object',
        params: '',
        defaultValue: ,
      },
      {
        key: 'maxZoom',
        desc: '图层最大缩放级别',
        type: 'Number',
        params: '',
        defaultValue: 24,
      },
      {
        key: 'visible',
        desc: '图层是否可见',
        type: 'String/Boolean',
        params: 'true、false、visibility、none',
        defaultValue: true,
      },
      {
        key: 'showTip',
        desc: '点击当前 图层元素是否弹出自定义页面',
        type: 'Boolean',
        params: 'true、false',
        defaultValue: true,
      },
      {
        key: 'imgData',
        desc: 'mapbox 类型地图加载点位图片',
        type: 'Array',
        params: '[{name: \'全局唯一的图片名称\'}， value: 图片路径}]',
        defaultValue: '[]',
      },
    ]
  },
  用原样输出: `
    文档编辑于2025年12月24日09:37:23
  `
}

const content = {
  // 导出md 名字
  mdFileName,
  // 导出md 内容
  mdContent,
}

export default content
