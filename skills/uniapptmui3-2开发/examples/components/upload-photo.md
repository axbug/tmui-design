---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 图片上传 TmUploadPhoto

样式丰富塑造性好

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/upload-photo"></webview>

::: details 示例模板

<<< ../../../src/pages/index/upload-photo.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| maxCount | number | 9 | 最大的可上传数量 | 
| round | string\|number | 10 | 图片项目圆角。 | 
| url | string | 'https://mockapi.eolink.com/LRViGGZ8e6c1e8b4a636cd82bca1eb15d2635ed8c74e774/admin/upload_pic/' | 上传地址 | 
| name | string | 'file' | 上传到服务器的名称字段 | 
| header | Record\<string, any\> \| null | null | 上传到服务器的头文件 | 
| formData | Record\<string, any\> \| null | null | 额外的表单数据。 | 
| imgHeight | string | '110' | 图片高,此处不可使用%单位 | 
| column | number | 5 | 一行显示几列 | 
| okFileIsDelete | boolean | true | 上传成功的文件是否允许删除 | 
| uploadingFileIsDelete | boolean | true | 上传中的文件是否允许删除 | 
| maxFileSize | number | 1024*1024*30 | 图片上传的限制大小，默认是30mb(可以开启压缩，最后可能比较小) | 
| statusCode | number | 200 | 开发者服务器响应码,默认是200表示上传成功. | 
| modelValue | Array\<Record\<string, any\> \| string\> | ()=\>[] | 等同v-model | 
| rangUrl | string | 'url' | 用于回显时,如果你提供的数组数据是对象,需要指定图片的地址.同时该对象数据会被保留到response字段中 | 
| beforeDel | func\|boolean | true | 图片被删除时触发如果返回Promise\<false\>删除失败否则成功类型null|(index:number,item:XUPLOADFILE_FILE_INFO)=\>Promise\<boolean\> | 
| beforeComplete | func\|boolean | true | 你需要原路返回参数提供的itemitem可以自行修改响应内容，响应类型这样可以自己根据服务的内容判断是成功还是失败或者没有权限。修改其中的status来达到成功还是失败TMUPLOAD_PHOTO_STATUS | 
| autoStart | boolean | true | 是否自动上传 | 
| sourceType | Array\<'album' \| 'camera'\> | ()=\>['album','camera'] | 图片来源同官方的sourceType：'album','camera' | 
| compress | boolean | true | 是否压缩 | 
| compressedHeight | string | 'auto' | 压缩后的缩放高，0表示不压缩高 | 
| compressedWidth | string | 'auto' | 压缩后的缩放高，0表示不压缩宽 | 
| quality | number | 80 | 压缩质量 | 
| addPos | string | 'after' | 添加图片的位置'before'出现在前面'after'出现在后面 | 
| mode | string | 'scaleToFill' | 图片展示的缩放模式同官方. | 
| sortable | boolean | true | 是否允许长按拖拽排序 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| complete | 名称：-,列表数据, | - | 每次全部上传完时触发 | 
| change | 名称：-,列表数据, | - | 变化时触发 | 
| delete | 名称：-,列表数据, | - | 图片被删除时触发 | 
| update:modelValue | - | - | 同步文件列表。 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| startUpload | - | - | - | 
| choose | - | - | - | 


