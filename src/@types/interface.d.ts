declare global {
	interface Uni {
		// 可再定义自己挂载在Uni的类型属性或者方法。
	}
	interface ResponseData<T>{
		code : number;
		data : T;
		msg : string;
		[key : string] : any;
	}
	// 定义自己的命名空间类型，以防与其它类型冲突。
	 namespace CAPP {
		
	}

}


export { }