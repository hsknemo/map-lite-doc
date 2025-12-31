const mdFileName = 'point-cut-image'

const mdContent = {
  一级标题: '点位切换图标',
  输出1用二级标题: 'mapbox场景演示',
  单一代码块: {
    type: 'file',
    codeType: 'js',
    file: '/temp/point-cut-img/mapbox.js',
  },
  输出1用原样输出: '在``imgList``中 配置 对应独一无二的引入图片路径``value``及名称``name``',

  输出2用二级标题: 'openlayers场景演示',
  输出2用单一代码块: {
    type: 'file',
    codeType: 'js',
      file: '/temp/point-cut-img/openlayers.js',
  },
  输出2用原样输出: '多了一个回调方法，``getStyle``, 它会在初始化图层的时候被调用，并且 会有形参 ``feature`` 返回，可以去 ``featureStyle`` 选择决定' +
    '需要用的样式，当然也``支持``自己直接写 openlayers ``ol.style`` 的样式, ``featureStyle`` 里只是简单初始化存储了imgList的遍历数据，每一个对象key' +
    '转换成了 openlayers 的' +
    'ol.style 对象'
}

const content = {
  // 导出md 名字
  mdFileName,
  // 导出md 内容
  mdContent,
}

export default content
