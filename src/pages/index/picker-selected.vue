<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">搜索选择器 tmPickerSelected</tm-text>
            <tm-text color="#999999" class="text-size-b">
                可以对提供的列表数据进行搜索，远程加载，单选多选
            </tm-text>
        </tm-sheet>
        <tm-sheet>

            <tm-picker-selected v-model="codes" v-model:model-str="codes_str" filterKey='name' labelKey="name" idKey="code" :list="city">
                <tm-button :block="true">打开选项</tm-button>
            </tm-picker-selected>
			
			<tm-sheet :margin="[0,15,0,0]" color="info">
				{{codes}}
			</tm-sheet>
			<tm-sheet :margin="[0,15,0,0]" color="info">
				{{codes_str}}
			</tm-sheet>
        </tm-sheet>
        
        <view style="height: 50px;"></view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import city from "@/uni_modules/tm-ui/static/pca-code.json"
const codes = ref<number[]>([])
const codes_str = ref<string[]>([])

</script>

<style lang="scss"></style>