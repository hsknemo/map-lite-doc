# 代码介绍
## 基础封装的图层 layer 的基类文件

 ```js 
 class BaseLayer {
  constructor(options = {}) {
    // 图层名称 必传字段 也是定义图层的名称
    this.name = options.name;
    // 图层最大缩放级别
    this.maxZoom = options.maxZoom;
    // 图层最小缩放级别
    this.minZoom = options.minZoom;
    // 图层是否可见 二者等价，传参支持 openlayers 布尔类型
    // 也支持mapbox 字符串 visibility | none 类型
    this.visible = options.visible;
    this.visibility = options.visible
    // 图层数据 放置坐标及其他后台响应的数据
    this.cacheData = []
    // 创建的图层类型 mapbox： 创建图层原始 layer 配置，默认创建点图层，
    // 如果有其他可以自定义继承配置覆盖
    this.layerConfig = {}

    // 点击当前 图层元素（Feature 对象 点、线、面）是否弹出自定义html
    this.showTip = options.showTip

    // mapbox 加载的点位图片
    // 格式为 [{name: '全局唯一的图片名称'}， value: 图片路径}]
    this.imgData = options.imgData

    this.loadImage()
    this.init()
  }

  static new() {
    return new this()
  }

  // 加载图层对应图片
  loadImage() {

  }

  // 初始化图层调用方法
  init() {
    this.loadData()
  }

  // 加载this.cacheData 数据
  loadData() {

  }
}
 
 ```
## 基础封装的图层 layer 的基类文件

  | id | name | lang |
  | --- | --- | --- |
  | 1 | 3333 | 3333 |
| 2 | ``测试测试测试测试测试 `` |  |
| 5 | 测试测试测试测试测试 |  |
  

文档编辑于2025年12月24日09:37:23
