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

  // 设置图层显示隐藏
  setVisible(bool) {
    window.MAP_OBJ.setVisible(bool, this)
    this.setVisibleRunOtherFunc(bool)
  }

  // 设置图层显示隐藏时运行其他方法
  setVisibleRunOtherFunc(bool) {

  }

  // 返回当前使用的地图实例
  useMap() {
    return window.MAP_OBJ.map
  }
}


/**
 * 查找图层
 * @param layerName 图层名称
 * @param key 图层对象里面的某一个属性
 */
const findGlobalLayer = (layerName, key) => {
}



 
 ```
## 入参介绍

  | 参数 | 说明 | 类型 | 可选值 | 默认值 | 所属生效范围 |
  | --- | --- | --- | --- | --- | --- |
  | name | 图层名称 必传字段 也是定义图层的名称 | String |  |  |  |
| minZoom | 图层最小缩放级别 | Number |  | 10 |  |
| maxZoom | 图层最大缩放级别 | Number |  | 24 |  |
| visible | 图层是否可见 | String/Boolean | true、false、visibility、none | true |  |
| showTip | 点击当前 图层元素是否弹出自定义页面 | Boolean | true、false | true |  |
| imgData | mapbox 类型地图加载点位图片 | Array | [{name: '全局唯一的图片名称'}， value: 图片路径}] | [] |  |
| imgIconSize | mapbox 控制点位图片大小 | Number |  | null | UseMapBox |
  
## 属性介绍

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | --- | --- | --- | --- | --- |
  | cacheData | 图层数据 | Array |  |  |
| layerConfig | 创建的图层类型 mapbox： 创建图层原始 layer 配置，默认创建点图层 | Object |  | {} |
  
## 方法介绍

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | --- | --- | --- | --- | --- |
  | init | 初始化继承自动调用方法 | Function |  |  |
| loadData | 加载数据方法，自行赋值cacheData | Function |  |  |
| setVisible | 控制图层显示隐藏 | Function |  |  |
| setVisibleRunOtherFunc | 设置图层显示隐藏时运行其他方法 | Function |  |  |
| useMap | 返回当前使用的地图实例 | Function |  |  |
  
## 全局方法
> 📢 注意：以下列举方法为``widnows`` 全局挂载 


  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | --- | --- | --- | --- | --- |
  | findGlobalLayer | 查找图层 | Function |  |  |
  