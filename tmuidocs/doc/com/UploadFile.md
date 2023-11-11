---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 文件上传 UploadFile
Upload 是一个常用的图片上传组件，注意这是useUploadFile函数的界面化组件，如果你对界面不满意可自行布局上传界面。
所有上传功能都已实现。你仅需要展示下界面即可。具体见useHook函数集

---

## :hot_pepper: 文件上传 UploadFile 示例

<webview url="https://tmui.design/h5/#/pages/form/uploadFile"></webview>

::: details 示例模板

<<< ../src/pages/form/uploadFile.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :x: | :x: | file模式仅支持微信,QQ,H5,WEB,如果配置为media模式则全部支持 | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | string | primary | 主题、颜色值 |
| defaultValue | ```string | FILE_TYPE | FILE_TYPE[] | string[] | Array<string | FILE_TYPE>``` | [] | 支持多种格式 |
| modelValue | ```string | FILE_TYPE | FILE_TYPE[] | string[] | Array<string | FILE_TYPE>``` | [] | 可v-model绑定变量 |
| disabled | boolean | false | 是否禁用上传 |
| disabledRemove | boolean | false | 是否禁用删除功能 |
| uploading | boolean | false | 可v-model:uploading绑定以查看当前是否处于上传中还是结束上传了。 |
| config | USE_UPLOAD_FILE_CONFIG_TYPE | {} | 上传的配置，结构下方 |

** 数据结构

```ts
//文件对象结构
export interface FILE_TYPE {
    url: string,//当前显示的图片地址，这是个本地临时地址。待上传前，成功后会替换服务器地址。
    status?: string,//上传状态文本
    progress?: number,//当前文件上传的进度
    uid?: string | number,//文件唯一标识id
    statusCode?: STATUS_CODE,//文件状态
    response?: any,//上传成功后的回调数据。
    name?: string,//文件名称
    size?: number,//文件大小字节单位
    FILE?: any,//文件对象。
    [key: string]: any
}

//文件上传的状态值
export enum STATUS_CODE {
    //待上传
    upload = 0,
    //上传中
    uploading = 1,
    //上传失败
    fail = 2,
    //上传成功
    success = 3,
    //超过大小限制
    max = 4,
}
export interface USE_UPLOAD_FILE_CONFIG_TYPE {
    /**media表示只允许图片或者视频选择，file表示允许任意文件，但只支持h5,微信平台  */
    uploadType:"media"|"file",
    maxCount: number,//一次选择文件最大数量。
    extension: string[],//文件选择的类型。
    type: "all" | "image" | "video" | "file" | undefined,
    /**只对h5 */
    sourceType: Array<'album' | 'camera'>,
    maxSize: number,//每一个文件上传的最大尺寸，默认为10mb
    hostUrl: string,//上传文件的服务器地址
    autoUpload: boolean,
    header: { [key: string]: any },//头部参数。
    formData: { [key: string]: any },//额外的表单数据。
    formName: string,
    code: number,//服务器响应码，如果不为此码，表示上传失败。
    maxDuration:number,//如果选择的类型是视频，可以定制此拍摄的最大时长。仅uploadType为media时有效
    sizeType:Array<'original'|'compressed'>,//仅对 mediaType 为 image 时有效，是否压缩所选文件,仅uploadType为media时有效
    camera:'back'|'front',//仅在 sourceType 为 camera 时生效，使用前置或后置摄像头,仅uploadType为media时有效
    mediaType:Array<'image'|'video'>,//注意当uploadType=media时，如果是微信，抖音，飞书这里可以为当前正常类型值；如果是其它平台：只取数组中第一个值，比如要选择图片设置为["image"],视频：["video"],仅uploadType为media时有效

}
```

## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | / | item:FILE_TYPE当前文件的对象 | 点击项目时触发 |

## :corn: slot插槽
暂无

## :green_salad: ref方法

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |





## :rage: 贡献者

