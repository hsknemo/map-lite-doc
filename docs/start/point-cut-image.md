# 点位切换图标
## mapbox场景演示

 ```js 
 import { BaseLayer } from '/MapLite/core/Layer/layer.js'
export class TestLayer extends BaseLayer {
  constructor(props) {
    super({
      name: 'TestPointLayer',
      imgList: [
        {
          name: '图片名称全局唯一',
          value: '图片路径',
        }
      ]
    });
  }

  ...
}
 
 ```
在``imgList``中 配置 对应独一无二的引入图片路径``value``及名称``name``
## openlayers场景演示

 ```js 
 import { BaseLayer } from '/MapLite/core/Layer/layer.js'
export class TestLayer extends BaseLayer {
  constructor(props) {
    super({
      name: 'TestPointLayer',
      imgList: [
        {
          name: '图片名称全局唯一',
          value: '图片路径',
        }
      ]
    });
  }

  // 要写明返回用那种 name 的 style
  getStyle(feature) {
    return this.featureStyle['图片名称全局唯一']
  }
}
 
 ```
多了一个回调方法，``getStyle``, 它会在初始化图层的时候被调用，并且 会有形参 ``feature`` 返回，可以去 ``featureStyle`` 选择决定需要用的样式，当然也``支持``自己直接写 openlayers ``ol.style`` 的样式, ``featureStyle`` 里只是简单初始化存储了imgList的遍历数据，每一个对象key转换成了 openlayers 的ol.style 对象