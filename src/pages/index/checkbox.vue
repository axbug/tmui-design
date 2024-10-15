<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">单选框</tm-text>
			<tm-text color="#999999">
				可单单独使用,也可单选框组合使用
			</tm-text>
		</tm-sheet>

		<tm-sheet :margin="['24']">
			<tm-text font-size="32" class=" text-weight-b d-block mb-24">单独使用</tm-text>
			<view class="flex flex-row flex-row-center-start gap-10">
				<tm-checkbox label="苹果"></tm-checkbox>
				<tm-checkbox color="success" label="梨子"></tm-checkbox>
				<tm-checkbox color="error" label="香蕉"></tm-checkbox>
				<tm-checkbox color="warn" label="地瓜"></tm-checkbox>
			</view>
		</tm-sheet>
		<tm-sheet :margin="['24']">
			<tm-text font-size="32" class=" text-weight-b d-block mb-24">联合Group使用</tm-text>
			<tm-checkbox-group @change="onchange" v-model="checkboxValue">
				<tm-checkbox v-for="(item, index) in ['苹果', '梨子', '香蕉', '地瓜', '花生']" :key="index" :value="item"
					:label="item"></tm-checkbox>
			</tm-checkbox-group>
			<tm-sheet color="info" padding="24" :margin="[0, 24, 0, 0]"><tm-text>{{ checkboxValue }}</tm-text>
			</tm-sheet>
		</tm-sheet>

		<tm-sheet :margin="['24']">
			<tm-text font-size="32" class=" text-weight-b d-block">竖向排列(并自定义样式)</tm-text>
		</tm-sheet>
		<tm-checkbox-group v-model="checkboxValue2" direction="column">
			<tm-sheet :color="checkboxValue2.includes(item.id) ? 'primary' : 'white'" v-for="(item, index) in listview"
				:key="index" :margin="[24, 0]" padding="0" class="flex-1">
				<tm-checkbox class="pa-20" :color="checkboxValue2.includes(item.id) ? 'warn' : 'primary'"
					:value="item.id">
					<template v-slot:label="checked">
						<tm-text :color="checkboxValue2.includes(item.id) ? '#fff' : '#333'">{{ item.text }}</tm-text>
					</template>
				</tm-checkbox>
			</tm-sheet>
		</tm-checkbox-group>

		<tm-sheet :margin="['24']">
			<tm-text font-size="32" class=" text-weight-b d-block mb-24">限制数量为2</tm-text>
			<tm-checkbox-group :max="2">
				<tm-checkbox v-for="(item, index) in ['苹果', '梨子', '香蕉', '地瓜', '花生']" :key="index" :value="item"
					:label="item"></tm-checkbox>
			</tm-checkbox-group>

		</tm-sheet>

		<view class="py-20"></view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const checkboxValue = ref<string[]>([])
const checkboxValue2 = ref<Array<string | number | boolean>>([])
const listview = ref<Array<Record<string, any>>>([
	{ text: "科技创新引领制造业高质量发展", id: 1 },
	{ text: "明确提出“建立保持制造业合理比重投入机制”。这些都为以科技创新引领制造业高质量发展指明了道路和方向。", id: 2 },
	{ text: "改造提升传统产业，培育壮大新兴产业，布局建设未来产业，完善现代化产业体系", id: 3 },
])
const onchange = (val: any) => {
	// console.log(val,'**')
}
</script>

<style></style>
