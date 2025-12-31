<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">日历 tmCalendarMultiple</tm-text>
			<tm-text color="#999999">
				可以多选，单选，同天不可选（酒店）模式
			</tm-text>
		</tm-sheet>


		<tm-sheet :padding="0" class="overflow">
            <tm-calendar-multiple head-bg-color="primary" v-model:currentDate="currentDate" 
			:date-style="dateStyle"
			head-font-color="#fff" :seekDay="6" v-model="dates" model="range" ></tm-calendar-multiple>
			<view class="pa-16">
				<tm-button block @click="setdate">赋值</tm-button>
			</view>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">单选模式</tm-text>
			<tm-text color="#999999">
				{{days}}
			</tm-text>
		</tm-sheet>
		<tm-sheet :padding="0" class="overflow">
			<tm-calendar-multiple color="error" head-bg-color="error" head-font-color="#fff" :multipleMax="1" :seekDay="6" v-model="days" model="day" ></tm-calendar-multiple>
		</tm-sheet>
	</view>
</template>

<script lang="ts" setup>
import { ref,nextTick } from "vue"
const dateStyle = ref<TM.tmCalendarDateStyle_type[]>([])
const dates = ref<string[]>([])
const currentDate = ref<string>('')
const days = ref<string[]>([])

const setdate = ()=> {
	dates.value = ['2024-5-1','2024-5-8']
	currentDate.value = "2024-5-1"
	nextTick(()=>{
		dateStyle.value = [
			{ date: '2024-5-3', color: '#00aa7f', label: '推荐', fontColor: 'white' },
			{ date: '2024-5-20', label: '完成', fontColor: 'orange' },
			{ date: '2024-5-21', label: '爆满', fontColor: 'red' },
			{ date: '2024-5-31', label: '禁用' },
			{ date: '2024-5-18', dot: true },
			{ date: '2024-5-17', dot: true, dotColor: "orange", dotLabel: "36" },
			{ date: '2024-5-1', dot: true, dotColor: "#52c428", dotLabel: "假", label: "劳动节", fontColor: "#52c428" },
			{ date: '2024-5-4', dot: true, dotColor: "#aa55ff", dotLabel: "休", label: "劳动节", fontColor: "#52c428" },
		]
	})
}

</script>

<style></style>
