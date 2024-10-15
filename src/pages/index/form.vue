<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">验证表单</tm-text>
            <tm-text color="#999999">
                为了高效验证和使用表单,现将校验规则统一在form上管理,集中化处理方便模拟模块化.动态表单，vif formitem字段时也会动态启用和关闭校验。
            </tm-text>
            <tm-form @submit="onsubmit" v-model="form" :rules="rules">
                <tm-form-item name="username" label="姓名">
                    <tm-input align="right" color="transparent" v-model="form.username">
                    </tm-input>
                </tm-form-item>
                <tm-form-item name="price" label="价格">
                    <tm-input type="number" v-model="form.price" align="right" color="transparent">
                        <template v-slot:rightIcon>
                            <text class="px-20">万元</text>
                        </template>
                    </tm-input>
                </tm-form-item>
                <tm-form-item name="address" label="地址">
                    <tm-input v-model="form.address" align="right" color="transparent">
                    </tm-input>
                </tm-form-item>
                <tm-form-item name="checkbox" label="产品类型">
                    <tm-checkbox-group class="py-20" v-model="form.checkbox" align="flex-end">
                        <tm-checkbox :value="item" :label="item" v-for="(item, index) in ['飞机', '手机', '桌子', '电脑']"
                            :key="item"></tm-checkbox>
                    </tm-checkbox-group>
                </tm-form-item>
                <tm-form-item name="radio" label="手机系统">
                    <tm-radio-group class="py-20" v-model="form.radio" align="flex-end">
                        <tm-radio :value="item" :label="item" v-for="(item, index) in ['飞机', '手机', '桌子', '电脑']"
                            :key="item"></tm-radio>
                    </tm-radio-group>
                </tm-form-item>
                <tm-form-item name="store" label="商家">
                    <view class="flex flex-row flex-row-center-end">
                        <tm-stepper width="200" v-model="form.store"></tm-stepper>
                    </view>
                </tm-form-item>
                <tm-form-item name="time" label="发布时间">
                    <tm-picker-date v-model="form.time" v-model:modelStr="_timestr">
                        <tm-input :modelValue="_timestr" placeholder="请选择时间" style="pointer-events: none" disabled
                            align="right" color="transparent">
                            <template v-slot:rightIcon>
                                <tm-icon name="arrow-right-s-line"></tm-icon>
                            </template>
                        </tm-input>
                    </tm-picker-date>
                </tm-form-item>
                <tm-form-item name="pingtai" label="平台">
                    <tm-picker v-model="form.pingtai" v-model:modelStr="_pingtaistr" rangText="name"
                        :list="[{ id: 2, name: '淘宝' }, { id: 1, name: '京东' }, { id: 3, name: '拼多多' }]">
                        <tm-input :modelValue="_pingtaistr" placeholder="请选择平台" style="pointer-events: none" disabled
                            align="right" color="transparent">
                            <template v-slot:rightIcon>
                                <tm-icon name="arrow-right-s-line"></tm-icon>
                            </template>
                        </tm-input>
                    </tm-picker>
                </tm-form-item>
                <tm-form-item name="score" label="评分">
                    <view class="flex flex-row flex-row-center-end py-20">
                        <tm-rate v-model="form.score"></tm-rate>
                    </view>
                </tm-form-item>
                <tm-form-item name="textarea" label="备注">
                    <tm-input v-model="form.textarea" align="right" :maxlength="100" placeholder="请输入" type="textarea" show-char-count color="transparent">
                    </tm-input>
                </tm-form-item>

                
                <view class="flex flex-row flex-row-center-center gap-20 mb-20 mt-n10">
                    <tm-button form-type="reset" skin="thin">重置</tm-button>
                    <tm-button form-type="submit">提交</tm-button>
                </view>
            </tm-form>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">欢迎登陆</tm-text>

            <tm-form @submit="onsubmit" v-model="logindata" :rules="rules2" direction="vertical" gap="24">
                <tm-form-item name="username" :show-bottom="false" :required="false">
                    <tm-input v-model="logindata.username" show-clear>
                    </tm-input>
                </tm-form-item>
                <tm-form-item name="password" :show-bottom="false" :required="false">
                    <tm-input password v-model="logindata.password" showEye>
                    </tm-input>
                </tm-form-item>
                <tm-button form-type="submit" block>登录</tm-button>
            </tm-form>
        </tm-sheet>

    </view>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
const form = ref({
    username: '',
    address: '',
    price: '',
    checkbox: [] as string[],
    radio: '',
    time: "2024-6-5",
    pingtai: [] as string[],
    store: 0,
    score:0,
    textarea:""
})
//动态变换表单时,首次不会校验.
const logindata = ref({
    username: '',
    password: ''
})
const _timestr = ref(form.value.time)
const _pingtaistr = ref('')
//可以把校验结构化，模块化从其它ts文件导入，共用到不同表单中。
const rules: Record<string, TM.FORM_RULE[]> = {
    username: [{ required: true, message: '姓名2到5个字符', rule: /^.{2,5}$/ }],
    address: [{ required: true, message: '地址不能为空' }, { required: true, message: '长度要小于3', max: 2 }],
    price: [{ required: true, message: '价格要大于等于99', type: 'number', min: 99 }],
    checkbox: [{ required: true }],
    radio: [{ required: true }],
    time: [{ required: true, type: 'date' }],
    pingtai: [{ required: true }],
    store: [{ required: true, min: 1, max: 100, message: "介于1-100之间" }],
    score: [{ required: true, min: 5, max: 5, message: "必须打5分哦" }],
    textarea: [{ required: true,max:100, message: '请输入内容' }]
}
const rules2: Record<string, TM.FORM_RULE[]> = {
    username: [{ required: true, message: '请输入正确的手机号码', type: 'phone' }],
    password: [{ required: true, message: '数字或者字母6-18位', rule: /^[a-zA-Z0-9]{6,18}$/ }],

}
const onsubmit = (evt: TM.FORM_SUBMIT_RESULT) => {
    console.log("校验结果:", evt)
}

</script>