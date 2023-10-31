---
title: useHooks
---

##### useHooks tmui.design

### 上传文件 useUploadFile

这是一个封装完整的文件上传hooks函数，适合自定义上传组件或者自定义上传界面的伙伴。

## 方法

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| useUploadFile | USE_UPLOAD_FILE_CONFIG_TYPE\|null | result | 直接执行即可 |

下方解析出来后的方法或者属性都有ts类型提示，我这里不不多解释了。如果想仔细看用处，请直接查看源码，源码已经注释好了。

```ts

// result:返回的结构体,可以直接解构使用：
{
	config:Ref<USE_UPLOAD_FILE_CONFIG_TYPE>,//配置表，可以直接修改
	choose,
	files: Ref<FILE_TYPE[]>,//文件列表
	remove,
	addFile,
	start,
	stop,
	clearFile,
	getFile,
	uploading,
	activeIndex,
	isLimitCount,
	addEventListener:(type:'change'|'beforeRemove'|'beforeStart'|'beforeFileStart'|'successAfter'|'success'|'fail'|'complete'|'uploadComplete'|'chooseFileAfter',
	Fun:any)
}

```
** addEventListener的用法就是为上传添加相关事件。其中的type就是事件名称，如果不懂什么意思请直接查找阅读源码，已经注释好了。**


## 使用
```ts
import { useUploadFile } from '@/tmui/tool/useFun/useUploadFile'
const {config,
        choose,
        files,
        remove,
        addFile,
        start,
        stop,
        clearFile,
        getFile,
		//当前上传的状态，true上传中,false结束
        uploading,
        activeIndex,
		//当前有没有超过上传数量
		isLimitCount,
		addEventListener} = useUploadFile();
// 选择上传文件
choose();
// 文件列表
console.log(files.value)
// 开始上传,如果你在config中配置了自动上传choose后会自动发起上传事件。
start();



```

## 类型参考
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
//config配置的结构
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

## 注意事项

属性都最Ref类型，访问时需要带.value，config可以直接修改配置。不建议直接修改files.value,
