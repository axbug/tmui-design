---
title: 自带JS工具库
---

<dirtoc></dirtoc>

##### JSTool tmui.design

# JS工具库  <Badge type="danger" text="v3.0.5+" vertical="middle" />

**文档还未完成**

### :tada: 如何调用

在全局任意位置均可调用，部分方法需要你导入相关包（主要是为了包大小考虑）<br>
***为什么在uni中是$tm而在上下文中使用tm。因为$tm在上下文里被系统使用了***

在vue或者nvue页面中调用
```vue
<script lang="ts" setup>
import {getCurrentInstance} from "vue"
const {proxy} = getCurrentInstance();

//可以在任意js中调用
uni.$tm.u.callPhone("10086") //拨打电话
//只在本上下文件中可以用如下：
proxy.tm.u.callPhone("10086")

</script>

```

### :tada: dayJs 日期插件

具体使用方法见它的文档[dayjs文档](https://dayjs.fenxianglu.cn/category/getset.html)<br>
这里我着重讲下如果导入和使用插件，好多小伙伴不知道在ts中使用。因dayjs已经被我集成在了插件中，无需你安装，
引入即可使用。

```ts
import * as dayjs from "@/tmui/tool/dayjs/esm/index"
const DayJs = dayjs.default;
//这里的DayJs就是dayjs对象啦。
//比如初始一个dayjs日期对象.
const nowDate = DayJs()
console.log(nowDate);//打印出了当前的时间dayjs对象数据。

```

安装dayjs插件，我已经集成了dayjs所有可用的插件，你无需下载，只需要引用即可。

```ts
import * as dayjs from "@/tmui/tool/dayjs/esm/index"
// 插件路径。
// @/tmui/tool/dayjs/esm/plugin/插件名称/index
//引入插件
import isoWeek from "@/tmui/tool/dayjs/esm/plugin/isoWeek/index"
//取得Dayjs函数对象
const DayJs = dayjs.default;
//安装插件
DayJs.extend(isoWeek)
//创建一个日期对象。
const nowdate = Dayjs();
//使用插件方法。
nowdate.isoWeek()

```

### :tada: preview 预览图片

```ts
/*
 * 预览图片。
 * @param {Object} url 必填 当前预览的图片链接。
 * @param {Object} list 可以是url数组，也可以是对象，数据比如：["http:url"] or [{url:"https:url",...}]
 * @param {Object} rangKey 如果list是对象数组，需要提供url字段。
 */
 export function preview(url:string="",list:Array<string>=[],rangKey:string = "url")
 
```
### :tada: splitData 数组分组

```ts
/**
* splitData 数组分组
* @param {Array} oArr - 原数组列表
* @param {Number} length - 单个数组长度
* @return {Array}  arr - 分组后的新数组
*/
export function splitData(oArr = [], length = 1)

```
### :tada: timeMuch 剩余时间
```ts
/**
* 剩余时间格式化
* @param {Number} t - 剩余多少秒
* @return {Object}  format - 格式后的天时分秒对象
*/
export function timeMuch(t:number) {
```
### :tada: getDateToNewData 距离时间多久
```ts
//获取时间距离当前时间,多久前，刚刚这样的格式。
export function getDateToNewData(timestamp:number|string|Date = new Date().getTime()){
```

### :tada: callPhone 拨打电话
```ts
/**
* 打电话
* @param {String<Number>} phoneNumber - 数字字符串
* @return {Promise}
*/
export function callPhone(phoneNumber = '')
```
### :tada: scanCode 相机扫码
```ts
/**
 * 调起客户端相机扫码。
 * @param {Boolean} onlyFromCamera true 是否只允许相机扫码识别
 * @param {Array<string>} scanType ['barCode', 'qrCode', 'datamatrix','datamatrix']
 * @returns Promise 成功返回相关数据结构
 */
 export function scanCode(onlyFromCamera = true, scanType = ['barCode', 'qrCode', 'datamatrix','datamatrix']){
```
### :tada: setClipboardData 设置剪切板
```ts
/**
 * 设置剪切板内容。
 * @param {String} data 
 * @returns Promise true/false
 */
 export function setClipboardData(data:string){
```
### :tada: getClipboardData 获取剪切板
```ts
/**
 * 获取剪切板内容
 * @returns Promise 剪切板内容
 */
 export function getClipboardData(){
```
### :tada: setCookie  置cookie数据
```ts
/**
 * 设置cookie数据
 * @param {String} key 键值
 * @param {String} data 值
 * @returns Boolean
 */
 export function setCookie(key:string, data:any) {
```
### :tada: delCookie 删除cookie
```ts
/**
 * 删除一个本地cookie
 * @param {String} key 键值
 * @returns Boolean
 */
 export function delCookie(key:string) {
```
### :tada: getCookie 获取cookie数据
```ts
/**
 * 获取一个cookie数据
 * 如果存入的是对象，返回的也是对象。如果是string返回的也是字符串。
 * @param {String} key 键
 * @returns json/string
 */
 export function getCookie(key:string) {
```
### :tada: httpUrlAddKey 向Url连接追加参数
```ts
/**
 * 向地址连接追加参数。
 * @param {string} uri 网址
 * @param {string} key 字段
 * @param {string} value 字段值
 * @returns 
 */
 export function httpUrlAddKey(uri:string, key:string, value:string) {
```
### :tada: getQueryString 取url参数
```ts
/**
 * 取url参数
 * @param {string} uri 网址
 * @param {string} key 字段
 * @returns string|undefined
 */
function getQueryString(url:string,key:string):string|undefined {
```

### :tada: getUid 随机一个唯一标识
```ts
/**
 * 随机一个唯一标识
 */
export function getUid (length=12){
```

### :tada: debounce 防抖 

```ts
/*
防抖
防抖原理：在一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
	@param {Function} func 要执行的回调函数
	@param {Number} wait 延迟的时间
	@param{Boolean} immediate 是否要立即执行
*/
let timeout:number|null = null;
export function debounce(func:Function, wait = 500, immediate = false) {
```
### :tada: throttle 节流
```ts
/**
 * 节流
	节流原理：在一定时间内，只能触发一次
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timer:number|null, flag:boolean;
export function throttle(func:Function, wait = 500, immediate = true) {
```

### :tada: deepClone 深度克隆

```ts
// 深度克隆
export function deepClone (obj:any) {
```
### :tada: isPhone 是否是手机号码
```ts
/**
 * 是否是手机号码
 * @param phone 号码
 * @returns Boolean
 */
export function isPhone(phone:string|number){
```
### :tada: isChina 是否含有中文
```ts
/**
 * 是否含有中文
 * @param s 字符串
 * @returns Boolean
 */
 export function isChina(s:string){
```

### :tada: isEmpty 是否为空
```ts
/**
 * 是否为空
 * @description 判断是否是null,对象是否为空，数组是否为空。是否为 undefaind，是否为 “”空字符串。
 * @param s 任意
 */
export function isEmpty(s:any){
```
### :tada: isIdCard 是否身份证号
```ts
/**
 * 是否身份证号
 * @param val 字符号或者数字
 * @returns Boolean
 */
export function isIdCard (val:string|number) {
```
### :tada: isIdCar 是否车牌
```ts
/**
 * 是否车牌
 * @description 蓝牌5位，绿牌6位。
 * @param s 字符串
 * @returns Boolean
 */
export function isIdCar(s:string){
```

### :tada: isPasswordOfNumber 纯数字密码验证
```ts
/**
 * 纯数字密码验证
 * @param s 字符串或者数字
 * @param len 最小长度，默认6
 * @param maxLen 最大长度，默认20
 * @returns Boolean
 */
export function isPasswordOfNumber(s:number|string,len=6,maxLen=20){
```
### :tada: isPasswordOfOther 密码验证
```ts
/**
 * 密码验证
 * @param s 字符串或者数字
 * @param len 最小长度，默认6
 * @param maxLen 最大长度，默认20
 * @param model 0数字和英文，1数字，英文必须包含，不允许有特殊字符，2数字和字母必须包含，可以有特殊字符。
 * @returns Boolean
 */
export function isPasswordOfOther(s:string|number,len=6,maxLen=20,model=0){
```

### :tada: isDate 是否是一个有效的日期
```ts
/**
 * 是否是一个有效的日期
 * @param s 字符串，数字，日期对象
 * @returns Boolean
 */
export function isDate(s:string|number|Date){
```
### :tada: isEmail 是否邮箱
```ts
/**
 * 是否邮箱
 * @param s 字符串
 * @returns Boolean
 */
export function isEmail(s:string){
```