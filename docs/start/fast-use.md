# 快速使用
## 在setting 文件夹中``setting.js``配置参数 使用``Mapbox`` 地图
```js
useMapFrame: 'UseMapBox'
```


## 创建自己的第一个图层
- 点图层
```js
import { BaseLayer } from '/MapLite/layer/layer.js'
export class TestLayer extends BaseLayer {
  constructor(props) {
    super({
      name: 'TestPointLayer',
      imgList: [
        {
          name: '图片名称全局唯一',
          value: '图片路径'
        }
      ]
    });
  }
  
  newMakeFeature(item) {
    let f = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [item.lng, item.lat]
      },
      properties: {
        icon: '图片名称全局唯一',
        data: item,
      }
    }
  }
  
  loadData() {
    this.cacheData = [
      {
        name: 'xxxxx',
        lng: 116.397428,
        lat: 39.90816
      }
    ]
    
    this.refreshFeature()
  }

}

```

## 在项目中使用

准备一个``main.js``

```js
import { MapEnumType } from '/MapLite/core/event/MapEnumType'
import TestLayer from '../TestLayer'

window.addEventListener(MapEnumType.mapLoadedEvent, () => {
  // 地图加载好会派发这个事件，可以在这里初始化自己的图层
  const testLayer = new TestLayer() 
  // or
  const testLayer = TestLayer.new()
})
```
::: tip 提示
也建议自己组织好图层的代码，方便管理
:::

## 推荐代码结构
:::info 代码结构
- core
    - mapLite文件目录
        - ...
- layers
    - xxx用途文件夹
        - xxx.layer.js
        - xxx.layer.js
    - xxx用途文件夹
        - xxx.layer.js
    - mainLayer.js // 统一导入用途文件夹所有图层并暴露
- ...
:::

### 控制台中访问或者代码里面访问图层
- 使用全局方法 ``findGlobalLayer``
```js
// 不传第二个参数 key 默认返回 实例所有内容
findGlobalLayer('TestLayer')
// 传第二个参数 key 只返回传递 key 的内容
findGlobalLayer('TestLayer', 'cacheData')
```
### 设置图层显示隐藏 示例代码
```js
const TestLayer = findGlobalLayer('TestLayer')
// 显示
TestLayer.setVisible(true)
// 隐藏
TestLayer.setVisible(false)

```
