---
title: useHooks
---

##### useHooks tmui.design

### 请求 useFetch

这个请求与以往的不同，也与之前的fetch不同，我所有的方法正在全部转向hooks并最终代替。


## 方法

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| useFetch | ```url : string, config ?: Ref<Tmui.fetchNetConfigType> \| Tmui.fetchNetConfigType \| ReactiveEffect<Tmui.fetchNetConfigType>``` | result | 直接执行即可 |

**config参数注意你可以传递Ref,Reactive等响应变量，也可以直接传递值**<br>

```ts

// result:返回的结构体：下面所有的字段值均为Ref类型，函数除外。
 {
	loading:boolean,//当前是否处于加载中，加载状态中的话，不会请求后续的请求，比如连续请求2次，第一次不结束，第2次不会请求。
	error:boolean,//当前请求是否有错误
	data:any,//返回的数据，会自动更新。
	pending:boolean,//当前是否从未请求过。
	//重置并刷新数据
	refresh:()=>Promise<boolean>,
	//请求数据
	getData: ()=>Promise<boolean>,
	//这个状态始终是false,需要你自己手动管理这个状态，如果设置为true，getData和自动刷新请求不会再执行。除非执行refresh()或者手动设置为false.
	empty:boolean
}
// config结构体
interface fetchNetConfigType {
	/**
	 * 请求的数据，query,或者body，都可传递对象。自动转换数据格式。
	 */
	data?:any,
	/**
	 * 头部数据。
	 */
	header?:any;
	/**
	 * 请求方式
	 */
	method?:fetchConfigMethod,
	/** 
	* 定义成功的服务器返回的状态码成功的标志
	*/
	statusCode?:number,
	/** 
	 * 从返回的结果读取的数据字段，默认全部返回，
	 * 如果指定了就会读取指定字段
	 * 比如你的结果返回{code,data,msg},如果你指定：['data'],结果集中只返回data数据
	 * 如果是['data',code],结果集中只返回{data,code}
	 */
	pick?:string[],
	/**
	 * 是否监视参数的变化，如果参数发生了变化将会重新发起请求
	 */
	watchRefresh?:boolean,
	/**
	 * 默认为all,当showToast为ture时，选择什么情况下显示请求后的弹出信息。失败，成功，所有请求
	 */
	toast?:'fail'|'success'|'all',
	/**
	 * 是否显示请求后的提示信息框,默认为true
	 */
	showToast?:boolean,
	/**
	 * 读取提示信息的字段，如果读取不到会显示自动的文字。默认为msg,你的接口返回比如{code,data,msg},自动读取的就是接口返回中的msg提示信息。
	 */
	toastKey?:string,
	/**
	 * 是否显示加载框,默认为true。开始请求前显示加载框。
	 */
	showLoading?:boolean,
}


```


## 使用
```ts
import {useFetch} from '@/tmui/tool/useFun/useFetch'
let token = ref("")
//建议传递响应值，这样改成值后，请求数据即可，参数会自动更新到请求结果中。
let reqConfig = ref<Tmui.fetchNetConfigType>({
	watchRefresh:true,
	data:{
		page:1,
		keyword:3
	},
	method:"GET",
	pick:['data'],
	header:{
		token
	},
	
})

//提醒解析参数时有的人可能会觉得重名与你的参数。其实是可以设置别名的如：const {data:myData} = ....,使用data时就应该使用myData啦。
const {error,getData,data,loading,pending,empty} = useFetch("hostUrl",reqConfig)
// 当然也传递非响应值，比如详情接口等一次性接口。
const reulst = useFetch("hostUrl",{data:{id:"123"}})
// reulst.data.value,或者解析const {data} = reulst,打开值data.value;

// 如果watchRefresh开启了后。改变reqConfig的任意值，会自动刷新数据，不需要再请求。
//比如我修改token值
token.value = "333" ; //注意此时会自动执行getData,并刷新上方所有导出的数据值。
//比如我更改下页码
reqConfig.value.data.page = 2 //自动请求并刷新数据。

//如果不想自动刷新数据，那么就要把watchRefresh:false,
reqConfig.value.data.page = 4;//不会刷新数据了，因为关闭了自动刷新功能，需要手动刷新下。
getData();//手机刷新下数据。data数据会自动更新。页面上的值会自动变化的。


```

## 注意事项
返回的结果集为Ref类型访问需要.value
