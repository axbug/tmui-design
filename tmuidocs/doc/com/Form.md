---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 表单 Form
表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。。

---

## :hot_pepper: 表单 Form 示例

<webview url="https://tmui.design/h5/#/pages/form/form"></webview>

::: details 示例模板

<<< ../src/pages/form/form.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | Object | true | 绑定对象值 |
| margin | `Array<number>` | [32,24] | 外间距[x,y]x=左右，y=上下 |
| padding | `Array<number>` | [16,0] | 内间距[x,y]x=左右，y=上下 |
| layout | String | horizontal | 表单标签是竖还是横排列:vertical,horizontal。 |
| labelWidth | Number | 160 | 如果为0表示自动宽度。 |
| labelAlign | String | left | 标签对齐方式 |
| border | Boolean | true | 显示下划线。 |
| transprent | Boolean | false | 是否透明背景。 |

**submit,validate校验后都将得到一致的结果参数从3.1.03开始**

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| submit | - | result | 表单提交函数 |
| reset | - | - | 重置表单函数 |
| validate | - | result | 执行表单检验，返回验证结果对象，内有isPass属性表示是否验证通过 |
| clearValidate | - | - | 清除验证函数 |
| update:modelValue | - | - | 更新表单绑定值 |

**从3.1.03开始,result结构如下：**
```ts
{ 
	data: {
		...form的modelValue数据
	},
	// 所有与form-item绑定的filed字段校验的结果数组。
	result:{
		message:string,//校验后的提示文本
		validator: boolean,//是否校验通过
	}[],
	isPass:boolean //是否校验通过
}

```


## :corn: slot插槽
默认default

## :green_salad: ref方法

**validate参数的fileds字段说明**
比如你的对象{a:{b:1},d:1},假设你只要校验b字段你应该填写```"a.b"```给fileds。即```["a.b","d"]```

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| submit | - | - | 提交表单 |
| reset | - | - | 重置表单 |
| validate | ```fileds:string[] = [],type = 'all'``` | result  | type空值时，只校验fileds字段，字段提供时请按照规范填写,手动校验表单，返回验证结果对象，内有isPass属性表示是否验证通过 |
| clearValidate | - | - | 清除校验状态 |
| pushKey | item:formItem | - | - |
| delKey | item:formItem | - | - |
| tmFormComnameId | - | - | tmFormId |



## :seedling: FormItem参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| parentClass | String | '' | 表单的父类,可以添加自定类名,影响内部 |
| align | String | '' | 这个属性主要是用来让左边标题和右边的表单等内容的对齐方式.正常情况用不到.只有在左边和右边内容高度不一致时,比如右边是多行文本或者上传组件,需要上对齐时能用到.此时可以写上flex-row-top-start |
| label | String | '' | 显示名称 |
| desc | String | '' | 底部表单说明文字 |
| margin | `Array<number>` | [12,12] | 外间距[x,y]x=左右，y=上下 |
| padding | `<Array<number>` | [0,0] | 内间距[x,y]x=左右，y=上下 |
| field | String | '' | 如果在forom绑定的model为深层对象，这里的名称需要如下:比如model = {a:2,b:{c:333}}，如果想绑定c,则field = "b.c" |
| help | String | '' | 表单底部的单项注意说明。 |
| required | Boolean | false | 是否显示必填的红色星号* |
| rules<Badge type="danger" text="v3.0.71+" vertical="middle" /> | Object | Array\<rulesItem\> | 检验规则,格式见下方 |
| border | Boolean | null | 显示下划线。 |
| showError<Badge type="danger" text="v3.0.71+" vertical="middle" /> | Boolean | null | 校验不通过的情况下，是否显示错误信息提示 |
| requiredTitleChangeColor<Badge type="danger" text="v3.0.81+" vertical="middle" /> | Boolean | true | 校验不通过时，是否让标题跟着变化文字颜色，默认是。 |
| errHeight<Badge type="danger" text="v3.1.04+" vertical="middle" /> | Number | 30 | 错误空间的高度 |
| labelWidth<Badge type="danger" text="v3.1.07+" vertical="middle" /> | Number | 0 | 标题宽度，如果为0统一使用form上的设置的宽度 |

**在3.0.71版本以前**rules只支持Object,之后支持Array\<rulesItem\>。为了向下兼容，之后的版本也是支持非数据校验函数。

rules类型rulesItem 格式如下：
```ts
export interface rulesItem {
    validator?:Function|boolean,//检验函数。可以是Promise异步回调。
    required?:boolean,//是否必填。
    message?:string,//检验不合格时的文本
}
```
## :corn: FormItem slot插槽
默认default<br>
插槽:label,表单标题插件
插槽:desc,表单底部的说明文字
插槽:error,表单底部的错误插槽，返回数据 data.message,

```ts
v-slot:error = "{data}"
data.message读取错误信息

```

## :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！

