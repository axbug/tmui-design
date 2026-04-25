## 常见布局场景

延续间距规范的设计体系，以下为各种布局场景的结构示例。

### 1. 卡片布局
带圆角背景的内容卡片，常用于信息展示。

```vue
<template>
    <view class="card">
        <text class="title">订单编号：2025010001</text>
        <text class="info">已完成</text>
        <view class="actions">
            <tm-button size="s" skin="outlined">查看详情</tm-button>
            <tm-button size="s" color="primary">再次购买</tm-button>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.card {
    margin: 0 24rpx 24rpx 16rpx;
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 24rpx;
    .title {
        font-size: 28rpx;
        color: #333333;
    }
    .info {
        font-size: 24rpx;
        color: #999999;
        margin-top: 8rpx;
    }
    .actions {
        margin-top: 20rpx;
        display: flex;
        justify-content: flex-end;
        gap: 16rpx;
    }
}
</style>
```

### 2. 横向排列
多项目横向排列，使用flex + gap控制间距。

```vue
<template>
    <view class="row">
        <view class="item">
            <text class="value">128</text>
            <text class="label">关注</text>
        </view>
        <view class="item">
            <text class="value">256</text>
            <text class="label">粉丝</text>
        </view>
        <view class="item">
            <text class="value">32</text>
            <text class="label">获赞</text>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.row {
    display: flex;
    align-items: center;
    padding: 24rpx;
    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8rpx;
        .value {
            font-size: 34rpx;
            font-weight: bold;
            color: #333333;
        }
        .label {
            font-size: 24rpx;
            color: #999999;
        }
    }
}
</style>
```

### 3. 主次结构：左图右文
左侧图片/头像 + 右侧文字信息。

```vue
<template>
    <view class="cell">
        <tm-image :width="120" :height="120" round="16" src="/static/cover.png"></tm-image>
        <view class="info">
            <text class="name">商品名称</text>
            <text class="desc">商品描述信息，简要说明</text>
            <text class="price">¥ 99.00</text>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.cell {
    display: flex;
    padding: 20rpx 16rpx;
    gap: 20rpx;
    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8rpx;
        .name {
            font-size: 28rpx;
            color: #333333;
            font-weight: bold;
        }
        .desc {
            font-size: 24rpx;
            color: #999999;
        }
        .price {
            font-size: 34rpx;
            color: #ff4d4f;
            font-weight: bold;
        }
    }
}
</style>
```

### 4. 主次结构：左标题右操作
标题在左 + 操作按钮/箭头在右。

```vue
<template>
    <view class="header">
        <text class="title">热门推荐</text>
        <view class="more">
            <text class="moreText">查看更多</text>
            <tm-icon name="arrow-right-s-line" :size="28"></tm-icon>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24rpx;
    .title {
        font-size: 34rpx;
        font-weight: bold;
        color: #333333;
    }
    .more {
        display: flex;
        align-items: center;
        gap: 4rpx;
        .moreText {
            font-size: 24rpx;
            color: #999999;
        }
    }
}
</style>
```

### 5. 列表项：带图标/头像
带头像、文字信息、右侧操作的标准列表行。

```vue
<template>
    <view>
        <view class="listItem">
            <tm-icon name="user-line" :size="40" color="primary"></tm-icon>
            <view class="content">
                <text class="title">个人信息</text>
                <text class="desc">修改昵称、头像等</text>
            </view>
            <tm-icon name="arrow-right-s-line" :size="32" color="#cccccc"></tm-icon>
        </view>
        <view class="listItem">
            <tm-icon name="settings-line" :size="40" color="primary"></tm-icon>
            <view class="content">
                <text class="title">系统设置</text>
                <text class="desc">通知、隐私、存储</text>
            </view>
            <tm-icon name="arrow-right-s-line" :size="32" color="#cccccc"></tm-icon>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.listItem {
    display: flex;
    align-items: center;
    padding: 20rpx 16rpx;
    gap: 20rpx;
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4rpx;
        .title {
            font-size: 28rpx;
            color: #333333;
        }
        .desc {
            font-size: 24rpx;
            color: #999999;
        }
    }
}
</style>
```

### 6. 网格布局
多列等宽网格，用于商品列表、图片墙等。

```vue
<template>
    <view class="grid">
        <view class="gridItem" v-for="item in list" :key="item.id">
            <tm-image :width="'100%'" :height="280" :src="item.cover"></tm-image>
            <view class="itemInfo">
                <text class="itemTitle">{{item.name}}</text>
                <text class="itemPrice">¥ {{item.price}}</text>
            </view>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface GoodsItem {
    id: number
    name: string
    cover: string
    price: string
}

const list = ref<GoodsItem[]>([])
</script>
<style lang="scss" scoped>
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
    padding: 0 24rpx;
    .gridItem {
        width: calc(50% - 10rpx);
        background-color: #ffffff;
        border-radius: 24rpx;
        overflow: hidden;
        .itemInfo {
            padding: 16rpx;
            display: flex;
            flex-direction: column;
            gap: 8rpx;
            .itemTitle {
                font-size: 28rpx;
                color: #333333;
            }
            .itemPrice {
                font-size: 34rpx;
                color: #ff4d4f;
                font-weight: bold;
            }
        }
    }
}
</style>
```

### 7. 底部操作栏
固定在页面底部的操作按钮区域。页面本身自带滚动，不需要套scroll-view，底部栏用fixed定位，内容区用占位view撑高。

```vue
<template>
    <view>
        <!-- 页面主体内容，自然滚动 -->
        <view class="bottomBarPlaceholder"></view>
        <view class="bottomBar">
            <tm-button block color="primary">提交订单</tm-button>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.bottomBarPlaceholder {
    height: calc(96rpx + env(safe-area-inset-bottom));
}
.bottomBar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16rpx 24rpx;
    padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
    background-color: #ffffff;
    box-shadow: 0 -2rpx 12rpx rgba(0, 0, 0, 0.05);
    z-index: 10;
}
</style>
```
