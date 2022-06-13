---
title: 自带JS工具库
---

<dirtoc></dirtoc>

##### JSTool tmui.design

# JS工具库  <Badge type="danger" text="v3.0.4+" vertical="middle" />

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
