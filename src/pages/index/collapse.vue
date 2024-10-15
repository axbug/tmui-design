<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8">折叠面板 Collapse</tm-text>
            <tm-text color="#999999">允许单开，和多开。同步的值不管你提供的是什么类型,最终会被同步成数组.</tm-text>
        </tm-sheet>
        <tm-sheet :padding="0" class=" overflow">
            <tm-collapse>
                <tm-collapse-item left-icon="settings-line" name="1" title="系统设置">
                    <tm-text class="line-10">
                        在贴牌代工这一业务方面，据阿宽食品官网显示，其公司旗下拥有全资及绝对控股的五大生产基地，分别是：成都龙泉驿工厂、北京顺义工厂、杭州富阳工厂、四川宜宾工厂、四川德阳工厂。
                        根据光大证券研究所数据，2018年-2021年，阿宽销售额复合增长率在行业前十厂商中排名第1，2021年的方便面销售额已位居内资品牌前3。
                    </tm-text>
                    <view class="fletm-1">
                        <tm-image width="100%"
                            src="https://store.tmui.design/api_v2/public/random_picture?random=993"></tm-image>
                    </view>
                </tm-collapse-item>
                <tm-collapse-item :showBottomLine="false" left-icon="question-line" name="2"
                    title="交易帮助信息提示交易帮助信息提示交易交易帮助信息提示帮助信息提示交易帮助信息提示">
                    <tm-text class="line-10">
                        在贴牌代工这一业务方面，据阿宽食品官网显示，其公司旗下拥有全资及绝对控股的五大生产基地，分别是：成都龙泉驿工厂、北京顺义工厂、杭州富阳工厂、四川宜宾工厂、四川德阳工厂。
                        根据光大证券研究所数据，2018年-2021年，阿宽销售额复合增长率在行业前十厂商中排名第1，2021年的方便面销售额已位居内资品牌前3。
                    </tm-text>
                </tm-collapse-item>
            </tm-collapse>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b ">只能展开一个</tm-text>
        </tm-sheet>

        <tm-sheet :padding="0" class=" overflow">
            <tm-collapse :multiple="false">
                <tm-collapse-item left-icon="mail-open-fill" name="3" title="如何提高低成本的效率">
                    <tm-text class="">
                        在贴牌代工这一业务方面，据阿宽食品官网显示，其公司旗下拥有全资及绝对控股的五大生产基地，分别是：成都龙泉驿工厂、北京顺义工厂、杭州富阳工厂、四川宜宾工厂、四川德阳工厂。
                        根据光大证券研究所数据，2018年-2021年，阿宽销售额复合增长率在行业前十厂商中排名第1，2021年的方便面销售额已位居内资品牌前3。
                    </tm-text>
                </tm-collapse-item>
                <tm-collapse-item left-icon="mail-send-fill" name="1" title="如何使用本UI组件库,会很难吗？">
                    <tm-text class="line-10">
                        在贴牌代工这一业务方面，据阿宽食品官网显示，其公司旗下拥有全资及绝对控股的五大生产基地，分别是：成都龙泉驿工厂、北京顺义工厂、杭州富阳工厂、四川宜宾工厂、四川德阳工厂。
                        根据光大证券研究所数据，2018年-2021年，阿宽销售额复合增长率在行业前十厂商中排名第1，2021年的方便面销售额已位居内资品牌前3。

                    </tm-text>
                    <view class="">
                        <tm-image width="100%"
                            src="https://store.tmui.design/api_v2/public/random_picture?random=993"></tm-image>
                    </view>
                </tm-collapse-item>
                <tm-collapse-item :disabled="true" left-icon="cloud-fill" name="6" title="如何使用本UI组件库,会很难吗？">
                    <tm-text class="line-10">
                        在贴牌代工这一业务方面，据阿宽食品官网显示，其公司旗下拥有全资及绝对控股的五大生产基地，分别是：成都龙泉驿工厂、北京顺义工厂、杭州富阳工厂、四川宜宾工厂、四川德阳工厂。
                        根据光大证券研究所数据，2018年-2021年，阿宽销售额复合增长率在行业前十厂商中排名第1，2021年的方便面销售额已位居内资品牌前3。
                    </tm-text>

                </tm-collapse-item>
                <tm-collapse-item :showBottomLine="false" left-icon="bar-chart-2-fill" name="2" title="如何提高低成本的效率">
                    <tm-text class="line-10">

                        在贴牌代工这一业务方面，据阿宽食品官网显示，其公司旗下拥有全资及绝对控股的五大生产基地，分别是：成都龙泉驿工厂、北京顺义工厂、杭州富阳工厂、四川宜宾工厂、四川德阳工厂。
                        根据光大证券研究所数据，2018年-2021年，阿宽销售额复合增长率在行业前十厂商中排名第1，2021年的方便面销售额已位居内资品牌前3。
                    </tm-text>
                </tm-collapse-item>
            </tm-collapse>
        </tm-sheet>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style></style>