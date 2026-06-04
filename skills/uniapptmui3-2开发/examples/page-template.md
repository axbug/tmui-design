## 页面或组件标准模板

### 基本结构
template在前，script在中，style在后。

```vue
<template>
	<view>
		<!-- 页面或组件的内容 -->
	</view>
</template>
<script lang="ts" setup>
// 代码逻辑
</script>

<style lang="scss" scoped>
// 样式代码
</style>

```

### 规范要点
1. template中文本必须使用`<text>`标签，文本样式类只能写在text上
2. script使用TypeScript + setup语法
3. style使用scss语法，scoped隔离，类名驼峰命名

### 带规范约束的完整示例

```vue
<template>
	<view class="page">
		<view class="card">
			<text class="cardTitle">卡片标题</text>
			<text class="cardContent">卡片内容区域</text>
		</view>
		<view class="card">
			<text class="cardTitle">卡片标题</text>
			<text class="cardContent">卡片内容区域</text>
		</view>
	</view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const list = ref<string[]>([])
</script>

<style lang="scss" scoped>
.page {
	.card {
		margin: 0 24rpx 24rpx 16rpx;
		padding: 24rpx;
		background-color: #ffffff;
		border-radius: 24rpx;
		.cardTitle {
			font-size: 34rpx;
			font-weight: bold;
			color: #333333;
		}
		.cardContent {
			font-size: 28rpx;
			color: #666666;
			margin-top: 12rpx;
			line-height: 1.5;
		}
	}
}
</style>

```
