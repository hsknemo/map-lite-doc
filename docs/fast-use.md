# 快速使用
## 在setting 文件夹中``setting.js``配置参数 使用``Mapbox`` 地图
```js
useMapFrame: 'UseMapBox'
```


## 创建自己的第一个图层
```js
import { BaseLayer } from '/layer/layer.js'
class TestLayer extends BaseLayer {
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

文章编辑于2025年12月24日09:38:10
