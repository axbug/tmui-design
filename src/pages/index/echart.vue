<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">百度图表 TmEchart</tm-text>
            <tm-text color="#999999">
                可以通过onInit或者getChart获取Chart对象来设置更新数据图表。点击数据可以响应事件。
            </tm-text>
        </tm-sheet>

        <tm-sheet>
            <tm-echart @click="click" @onInit="onInit"></tm-echart>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">可以通过ref来初始数据</tm-text>

            <tm-button block @click="setOption">手动赋值</tm-button>
            <tm-echart ref="echart"></tm-echart>
        </tm-sheet>

    </view>
</template>
<script setup lang="ts">
import TmEchart from '@/uni_modules/tm-ui/components/tm-echart/tm-echart.vue';
import { ECharts } from 'echarts';
import { ref } from 'vue';
const echart = ref<InstanceType<typeof TmEchart> | null>(null)
const onInit = (chart: ECharts) => {
    console.log(chart)
    chart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }
        ]
    })
}
const click = (evt: any) => {
    console.log(evt)
    uni.showToast({ title: evt.data + '', icon: 'none' })
}
const setOption = async () => {
    let chart = await echart.value?.getChart()
    chart?.setOption({
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
}
</script>
<style lang="scss" scoped></style>