---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 图片上传 Upload
Upload 是一个常用的图片上传组件

---

### :hot_pepper: 图片上传 Upload 示例

<webview url="https://tmui.design/h5/#/pages/form/upload"></webview>

::: details 示例模板

@[code vue](pages/form/upload.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 400 | 组件宽度 |
| rows | Number | 5 | 每行显示几张图片 |
| imageHeight | Number | 140 | 图片高度 |
| defaultValue | Array\<file> | [] | 默认的图片文件列表 |
| imageModel | String | scaleToFill | 图片缩放模式 |
| modelValue | Array\<file> | [] |文件列表，常用于双向绑定 |
| color | String | primary | 组件颜色 | 
| header | Object | { } | 图片上传http头 |
| formData | Object | { } | 图片上传formData |
| formName<Badge type="danger" text="v3.0.83+" vertical="middle" /> | String | 'file' | 文件表单名称（后台读取文件时的表单字段名） |
| maxFile | Number | 9 | 最大可选图片数量 |
| maxSize | Number | 10*1024*1024 | 图片最大上传大小 |
| url | String | "" | 上传地址 |
| disabled | Boolean | false | 是否禁用组件 |
| autoUpload | Boolean | true | 是否自动上传 |
| onRemove | Function / Boolean | true | 删除前执行，如果返回false,将阻止删除 |
| onStart | Function / Boolean | true | 上传前执行，如果返回false,将阻止上传 |
| onSuccessAfter | Function / Boolean | true | 上传成功后，从服务器响应后立即执行，此时，还未更改当前文件上传的状态，是成功还是失败，如果此时返回false,将会让文件状态从成功改为上传失败，尽管 从服务器正确返回，但仍然显示失败 |
| beforeChooese | Function / Boolean | true | 选择文件前执行，如果此时返回false,将阻止选择文件。你可以在这里做一些上传前的配置 |
| fileType | `Array<string>` | `['album','camera']` | 选择图片的场景，默认是从相册中和相机中 |
| status-code | Number | 200 | 服务器请求成功时的状态值 |


### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| success | / | item:当前上传成功文件的对象，fileList:累积上传成功文件的对象列表 | 成功后返回两个值，item与fileList 分别表示当前上传成功的文件对象以及累积上传成功的文件对象列表 |
| fail | / | / |item:当前上传失败的文件对象，fileList:累积上传文件的对象列表 | 失败后返回两个值，item与fileList 分别表示当前上传成功的文件对象以及累积上传失败的文件对象列表 |
| complate | / | item:当前上传文件的对象，fileList:累积上传文件的对象列表 | 成功后返回两个值，item与fileList 分别表示当前上传成功的文件对象以及累积上传成功的文件对象列表 |
| remove | / | item:当前删除文件的对象 | 返回一个值 item 为删除文件的对象 |
| change | / | item:当前改变文件的对象 | 返回一个值 item 为改变文件的对象 |
> 注意：complete事件是无论上传成功与失败都会返回，success与fail事件对等，之后是complete事件

### :corn: slot插槽
icon<Badge type="danger" text="v3.0.77+" vertical="middle" />:用来自定义显示，上传提示的图标，可以自定义图标或者text名称。

### :green_salad: ref方法

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| start | / | / | 开始上传 |
| stop | / | / | 停止上传 |
| clear | / | / | 清除所有文件 |
| del | fileId:Number/String | / | 删除文件列表内某一项文件 |
| getFailList | / | / | 获取上传失败的文件文件列表 |
| clearFail | / | / | 清空上传失败文件列表，只要标识不是成功的都会删除 |

```ts
import {getCurrentInstance} from "vue"
import tmUpload from "@/tmui/components/tm-upload/tm-upload.vue"
const {proxy} = getCurrentInstance();
// 开始上传
proxy.$refs.upload.start()
// 停止上传
proxy.$refs.upload.stop()
// 清除所有文件
proxy.$refs.upload.clear()
// 删除文件列表内某一项文件
proxy.$refs.upload.del("fileId")
// 获取上传失败的文件文件列表
const getFailList =  proxy.$refs.upload.getFailList()
// 清空上传失败文件列表
proxy.$refs.upload.clearFail()

```


### :rage: 贡献者

[Wicos](http://wicos.me)