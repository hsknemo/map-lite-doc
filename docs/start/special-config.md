# 专题配置
## 专题概念
> 我们把一组专题的图层组件称为专题，通俗来讲就是只看某一组图层的显示，构建出来的地图场景。

## 如何配置？
> 在 special 文件夹中找到 special.setting.js, 对导出的 ``speicalSetting`` 对象进行配置

## 演示

 ```js 
 // 找到special.setting.js文件
export const speicalSetting = {
  [专题名称]: [
    '图层名称',
    '图层名称2',
    ...
  ]
}
 
 ```
其中图层名称就是创建图层``唯一名字`` ``Layer.name``, 专题名称也是唯一，建议合理取名
## 调用方式

 ```js 
 import specialCore from '@/MapLite/core/Special/specialCore.js'
specialCore.open('专题名称')
 
 ```
## 默认专题

 ```js 
 // 找到special.setting.js文件
export const speicalSetting = {
  [专题名称]: [
    '图层名称',
    '图层名称2',
    ...
  ]
}

// 这里配置默认专题
export const defaultSettingLayer = 'xxx'
 
 ```
## 专题方法

  | 参数 | 说明 | 类型 | 可选值 | 默认值 | 所属生效范围 |
  | --- | --- | --- | --- | --- | --- |
  | open | 打开专题 | Function | 配置在special.setting.js 的专题名称 |  |  |
  
## 专题全局事件

  | 参数 | 说明 | 类型 | 可选值 | 默认值 | 所属生效范围 |
  | --- | --- | --- | --- | --- | --- |
  | layer.open | 打开专题 | Event | 当调用open 方法，或者 进入地图有配置默认专题的情况下触发 |  |  |
  
### 使用方式

 ```js 
 window.addEventListener('layer.open', ev => {
  console.log('打开了xxx 专题', ev)
})
 
 ```
