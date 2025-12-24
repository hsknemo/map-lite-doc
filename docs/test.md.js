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
      {
        label: '所属生效范围',
        prop: 'rangeName',
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
      {
        key: 'imgIconSize',
        desc: 'mapbox 控制点位图片大小',
        type: 'Number',
        params: '',
        defaultValue: 'null',
        rangeName: "UseMapBox"
      },
    ]
  },

  输出3用二级标题: '属性介绍',
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
        defaultValue: '{}',
      },
    ]
  },

  输出4用二级标题: '方法介绍',
  输出4用表格: {
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
        key: 'init',
        desc: '初始化继承自动调用方法',
        type: 'Function',
        params: '',
        defaultValue: '',
      },
      {
        key: 'loadData',
        desc: '加载数据方法，自行赋值cacheData',
        type: 'Function',
        params: '',
        defaultValue: '',
      },

      {
        key: 'setVisible',
        desc: '控制图层显示隐藏',
        type: 'Function',
        params: '',
        defaultValue: '',
      },

      {
        key: 'setVisibleRunOtherFunc',
        desc: '设置图层显示隐藏时运行其他方法',
        type: 'Function',
        params: '',
        defaultValue: '',
      },

      {
        key: 'useMap',
        desc: '返回当前使用的地图实例',
        type: 'Function',
        params: '',
        defaultValue: '',
      },
    ]
  },

  输出5用二级标题: '全局方法',
  输出5用块引:'📢 注意：以下列举方法为``widnows`` 全局挂载 ',
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
    ],
    数据: [
      {
        key: 'findGlobalLayer',
        desc: '查找图层',
        type: 'Function',
        params: '',
        defaultValue: '',
      },
    ]
  },

}

const content = {
  // 导出md 名字
  mdFileName,
  // 导出md 内容
  mdContent,
}

export default content
