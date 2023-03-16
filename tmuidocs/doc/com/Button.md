---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 按钮 Button
常用组件按钮。

---

### :hot_pepper: 按钮 Button 示例

<webview url="https://tmui.design/h5/#/pages/changyong/button"></webview>

::: details 示例代码

@[code vue](pages/changyong/button.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| transprent | Boolean | false | 是否透明 |
| followTheme | Boolean | true | 是否跟随全局主题 |
| size | String | 'normal' | 按钮尺寸:mini,small,normal,middle,large |
| fontSize | Number | 0 | 按钮文字大小，单位rpx |
| fontColor<Badge type="danger" text="v3.0.63+" vertical="middle" /> | String | "" | 按钮文字/图标主题色，默认为空，自动配色 |
| margin | ArrayasPropType\<Array\<number>> | ()=>[0,16] | 外间距[x,y]x=左右，y=上下 |
| padding | ArrayasPropType\<Array\<number>> | ()=>[0,0] | 内间距[x,y]x=左右，y=上下 |
| shadow | Number | 2 | 投影,0-25 |
| width | Number | 0 | 宽度，单位rpx |
| height | Number | 0 | 高度，单位rpx |
| block | Boolean | false | 使用按钮宽度自动100% |
| round | Number | 2 | 圆角-1-25，单位rpx，如果想去除按钮圆角，请设置为-1 |
| loading | Boolean | false | 使按钮加载状态，其它事件不会触发 |
| disabled | Boolean | false | 是否禁用 |
| url | String | '' | 页面地址，当提供时，点击会跳转到相应页面 |
| label | String | '' | 按钮文字 |
| icon | String | '' | 按钮图标 |
| formType | String | '' | submit,reset,本组件额外新增:'filterCancel','filterConfirm',提供此值时，此按钮可以配合form组件用来提交事件表单 |
| openType | String | '' | 开放能力，[见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| appParameter | String | '' | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| sessionFrom | String | '' | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| sendMessageTitle | String | '' | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| sendMessagePath | String | '' | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| sendMessageImg | String | '' | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| sendMessageCard | String | '' | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| round | Number | 3 | 圆角0-25，单位rpx |
| disabledColor | String | grey-1 | 按钮被禁用时展现的颜色 |


### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |
| touchstart |  |  |  |
| touchmove |  |  |  |
| touchcancel |  |  |  |
| touchend |  |  |  |
| tap |  |  |  |
| longpress |  |  |  |
| getphonenumber |  |  |  |
| getuserInfo |  |  | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| getUserProfile |  |  | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| error |  |  |  |
| opensetting |  |  | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| launchapp |  |  | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |
| contact |  |  | [见文档](https://uniapp.dcloud.net.cn/component/button.html) |


### :corn: slot插槽
默认default,为文本内容。这个默认只有非nvue才有用。我不建议用默认插槽来书写按钮文本。原因是不能跨平台，建议使用按钮属性```label```

### :green_salad: ref方法
无