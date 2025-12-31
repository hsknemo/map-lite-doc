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
