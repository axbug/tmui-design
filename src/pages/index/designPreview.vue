<template>
  <view class="page-root">
    <view class="tm-pbr3n">
      <tm-sheet
        class="tm-0ewur"
        :linear="['to right', '#1677ff', '#0A84FF']"
        :shadow="['0rpx', '16rpx', '48rpx', 'rgba(10, 132, 255, 0.18)']"
        :padding="['40rpx', '40rpx', '40rpx', '40rpx']"
        :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
        :margin="['0rpx', '0rpx', '0rpx', '0rpx']"
      >
        <view class="tm-2xd8b">
          <view class="tm-3uwyv">
            <view class="tm-j3j11" :gap="'24rpx'">
              <image
                class="tm-78iud"
                :src="'https://random-api.czl.net/pic/fj'"
                :mode="'aspectFill'"
              ></image>
              <view class="tm-p9vw3">
                <tm-text :color="'#ffffff'" :lines="1" :fontSize="'36rpx'"
                  >星海科技（北京）有限公司</tm-text
                >
                <view class="tm-3ib4k" :gap="'16rpx'">
                  <tm-text :color="'#ffffff'" :fontSize="'30rpx'">张晨</tm-text>
                  <tm-text :color="'rgba(255,255,255,0.85)'" :fontSize="'26rpx'"
                    >资产管理员</tm-text
                  >
                </view>
              </view>
            </view>
            <tm-button
              :icon="'notification-3-line'"
              :skin="'thin'"
              :color="'white'"
              :width="'88rpx'"
              :height="'88rpx'"
              :rounded="true"
              :iconSize="'40rpx'"
              :borderColor="'#ffffff'"
              :btnIcon="true"
            ></tm-button>
          </view>
          <view class="tm-bsks2" :gap="'16rpx'">
            <tm-tag
              :size="'s'"
              :skin="'thin'"
              :color="'white'"
              :label="'今日已同步'"
              :borderColor="'#ffffff'"
              >今日已同步</tm-tag
            >
            <tm-tag
              class="tm-20aak"
              :size="'s'"
              :skin="'thin'"
              :color="'white'"
              :label="'消息 3 条'"
              :borderColor="'#ffffff'"
              >消息 3 条</tm-tag
            >
          </view>
          <tm-text :color="'rgba(255,255,255,0.88)'" :lines="2" :fontSize="'26rpx'"
            >欢迎进入企业资产工作台，支持按角色动态显示功能入口，并可下拉刷新首页数据。</tm-text
          >
        </view>
      </tm-sheet>
      <tm-sheet
        :margin="['0rpx', '20rpx', '0rpx', '0rpx']"
        :padding="['32rpx', '32rpx', '32rpx', '32rpx']"
        :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
      >
        <view class="tm-2xd8b">
          <view class="tm-xynhp">
            <tm-text :color="'#1a1a1a'" :fontSize="'34rpx'">角色工作台</tm-text>
            <tm-text :color="'#666666'" :fontSize="'24rpx'">下拉可刷新</tm-text>
          </view>
          <tm-tabs
            class="tm-e7iqt"
            :list="[{ text: '员工工作台' }, { text: '管理员工作台' }]"
            :rangKey="'text'"
            :fontSize="'28rpx'"
            :lineColor="'#0A84FF'"
            :modelValue="1"
            :titleColor="'#666666'"
            :activeTitleColor="'#0A84FF'"
          ></tm-tabs>
          <tm-row :column="3" :gutter="[10]">
            <tm-col>
              <tm-sheet
                :color="'#f8fbff'"
                :padding="['16rpx', '28rpx', '16rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-evoea">
                  <tm-icon
                    :name="'archive-stack-line'"
                    :color="'#1677ff'"
                    :size="'84rpx'"
                  ></tm-icon>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#333333'"
                    :fontSize="'24rpx'"
                    >资产登记</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#f8fbff'"
                :padding="['16rpx', '28rpx', '16rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-evoea">
                  <tm-icon :name="'file-list-3-line'" :color="'#52c41a'" :size="'84rpx'"></tm-icon>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#333333'"
                    :fontSize="'24rpx'"
                    >领用申请</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#f8fbff'"
                :padding="['16rpx', '28rpx', '16rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-evoea">
                  <tm-icon :name="'reply-line'" :color="'#fa8c16'" :size="'84rpx'"></tm-icon>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#333333'"
                    :fontSize="'24rpx'"
                    >归还处理</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#f8fbff'"
                :padding="['16rpx', '28rpx', '16rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-evoea">
                  <tm-icon :name="'task-line'" :color="'#7b61ff'" :size="'84rpx'"></tm-icon>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#333333'"
                    :fontSize="'24rpx'"
                    >盘点任务</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#f8fbff'"
                :padding="['16rpx', '28rpx', '16rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-evoea">
                  <tm-icon :name="'tools-line'" :color="'#eb2f96'" :size="'84rpx'"></tm-icon>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#333333'"
                    :fontSize="'24rpx'"
                    >维修报修</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#f8fbff'"
                :padding="['16rpx', '28rpx', '16rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-evoea">
                  <tm-icon :name="'search-eye-line'" :color="'#13c2c2'" :size="'84rpx'"></tm-icon>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#333333'"
                    :fontSize="'24rpx'"
                    >资产查询</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
          </tm-row>
          <tm-text
            :_style="'margin: 24rpx 0rpx 0rpx'"
            :color="'#999999'"
            :lines="2"
            :fontSize="'24rpx'"
            >首页可根据登录角色动态显示对应入口：普通员工优先展示申请与查询，管理员优先展示登记、盘点与处理能力。</tm-text
          >
        </view>
      </tm-sheet>
      <tm-sheet
        :margin="['0rpx', '20rpx', '0rpx', '0rpx']"
        :padding="['32rpx', '32rpx', '32rpx', '32rpx']"
        :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
      >
        <view class="tm-2xd8b">
          <view class="tm-735k9">
            <tm-text :color="'#1a1a1a'" :fontSize="'34rpx'">资产统计概览</tm-text>
            <tm-text :color="'#666666'" :fontSize="'24rpx'">09:30 更新</tm-text>
          </view>
          <tm-row :column="2" :gutter="[10]">
            <tm-col>
              <tm-sheet
                :color="'#eef6ff'"
                :padding="['28rpx', '28rpx', '28rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-2xd8b">
                  <tm-text :color="'#666666'" :fontSize="'26rpx'">资产总数</tm-text>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#1677ff'"
                    :fontSize="'44rpx'"
                    >2,486</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#f3fff3'"
                :padding="['28rpx', '28rpx', '28rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-2xd8b">
                  <tm-text :color="'#666666'" :fontSize="'26rpx'">在用数量</tm-text>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#52c41a'"
                    :fontSize="'44rpx'"
                    >1,968</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#fffaf0'"
                :padding="['28rpx', '28rpx', '28rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-2xd8b">
                  <tm-text :color="'#666666'" :fontSize="'26rpx'">闲置数量</tm-text>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#fa8c16'"
                    :fontSize="'44rpx'"
                    >312</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col>
              <tm-sheet
                :color="'#fff0f6'"
                :padding="['28rpx', '28rpx', '28rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-2xd8b">
                  <tm-text :color="'#666666'" :fontSize="'26rpx'">维修中</tm-text>
                  <tm-text
                    :_style="'margin: 16rpx 0rpx 0rpx'"
                    :color="'#eb2f96'"
                    :fontSize="'44rpx'"
                    >41</tm-text
                  >
                </view>
              </tm-sheet>
            </tm-col>
            <tm-col :span="2">
              <tm-sheet
                :color="'#f5f5f5'"
                :padding="['28rpx', '28rpx', '28rpx', '28rpx']"
                :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
              >
                <view class="tm-8x4cq">
                  <view class="tm-2xd8b">
                    <tm-text :color="'#666666'" :fontSize="'26rpx'">报废数量</tm-text>
                    <tm-text
                      :_style="'margin: 16rpx 0rpx 0rpx'"
                      :color="'#1a1a1a'"
                      :fontSize="'44rpx'"
                      >165</tm-text
                    >
                  </view>
                  <tm-tag :skin="'thin'" :color="'danger'" :label="'同比 +6%'">同比 +6%</tm-tag>
                </view>
              </tm-sheet>
            </tm-col>
          </tm-row>
        </view>
      </tm-sheet>
      <tm-sheet
        :margin="['0rpx', '20rpx', '0rpx', '0rpx']"
        :padding="['32rpx', '32rpx', '32rpx', '32rpx']"
        :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
      >
        <view class="tm-2xd8b">
          <view class="tm-735k9">
            <tm-text :color="'#1a1a1a'" :fontSize="'34rpx'">待处理事项</tm-text>
            <tm-tag :skin="'thin'" :color="'warning'" :label="'共 9 项'" :size="'m'"
              >共 9 项</tm-tag
            >
          </view>
          <tm-cell
            :card="false"
            :desc="'3 条申请等待管理员审批'"
            :icon="'file-list-3-line'"
            :label="'3 条'"
            :title="'待审批领用申请'"
            :lrPadding="'0'"
            :minHeight="'112rpx'"
          ></tm-cell>
          <tm-cell
            :card="false"
            :desc="'本周需要完成的固定资产盘点'"
            :icon="'task-line'"
            :label="'2 项'"
            :title="'待盘点任务'"
            :lrPadding="'0'"
            :minHeight="'112rpx'"
          ></tm-cell>
          <tm-cell
            :card="false"
            :desc="'请及时处理即将过保资产'"
            :icon="'alarm-warning-line'"
            :label="'4 台'"
            :title="'即将到期保修提醒'"
            :lrPadding="'0'"
            :minHeight="'112rpx'"
          ></tm-cell>
          <tm-cell
            :card="false"
            :desc="'员工已提交归还，请确认入库状态'"
            :icon="'reply-line'"
            :label="'2 条'"
            :title="'待处理归还记录'"
            :lrPadding="'0'"
            :minHeight="'112rpx'"
            :showBottomBorder="false"
          ></tm-cell>
        </view>
      </tm-sheet>
      <tm-sheet
        :margin="['0rpx', '20rpx', '0rpx', '0rpx']"
        :padding="['28rpx', '28rpx', '28rpx', '28rpx']"
        :borderRadius="['24rpx', '24rpx', '24rpx', '24rpx']"
      >
        <tm-alert :round="'20rpx'"
          >首页模块可按角色、消息状态与企业配置动态展示，建议在每次进入工作台时同步最新资产数据。</tm-alert
        >
      </tm-sheet>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped>
view {
  box-sizing: border-box;
}
.page-root {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.tm-pbr3n {
  position: relative;
  padding: 32rpx 32rpx 48rpx;
  background-color: #f2f2f7;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}
.tm-0ewur {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.tm-2xd8b {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}
.tm-3uwyv {
  position: relative;
  margin: 0rpx 0rpx 36rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.tm-j3j11 {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
}
.tm-78iud {
  width: 112rpx;
  height: 112rpx;
  border-radius: 56rpx;
}
.tm-p9vw3 {
  position: relative;
  margin: 0rpx 12rpx;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}
.tm-3ib4k {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.tm-bsks2 {
  position: relative;
  margin: 0rpx 0rpx 24rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.tm-20aak {
  margin: 0rpx 0rpx 0rpx 10rpx;
}
.tm-xynhp {
  position: relative;
  margin: 0rpx 0rpx 20rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.tm-e7iqt {
  margin: 0rpx 0rpx 28rpx;
}
.tm-evoea {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.tm-735k9 {
  position: relative;
  margin: 0rpx 0rpx 24rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.tm-8x4cq {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
