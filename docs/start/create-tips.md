# 如何创建图层自身tips

> 图层上声明 getHtml 方法，返回html字符串
```js
import { BaseLayer } from '/MapLite/core/Layer/layer.js'
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
  
  // 声明此方法返回html字符串
  getHtml(data, feature) {
    return `
      <div>
        23232
      </div>
    `
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
### 方法参数说明
- data: feature.properties.data 数据来自于 ``cacheData`` 里面的对象
- feature: 当前点击的元素对象

### 如果需要Vue
> 确保自己项目引入了Vue的cdn, 或者可以拿到 Vue 的类对象
> 加一个延时器，直接写Vue 代码即可
- 示范代码
```js
...

async delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


getHtml(data, feature) {
  this.createVue(data, feature)
  return `
  <div id="id-app">
    ... vue 组件代码
  </div>
  `
}

async createVue(data, feature) {
  // 延迟500ms 调用
  await this.delay(500)
  new Vue({
    el: '#id-app'
  })
}
...
```

- 📢注意
:::danger
禁止将任何地图相关对象 例如 ``feature`` 挂载到 Vue 组件的 ``data`` 中，否则会有严重的性能问题（响应式递归）！
:::
