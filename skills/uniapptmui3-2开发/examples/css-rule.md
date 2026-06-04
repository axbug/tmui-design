## CSS 使用规范示例

### 基本规则
- 必须使用 scss 语法
- 类名驼峰命名
- 使用嵌套组织，不平铺
- 嵌套层级不超过3层

### 嵌套语法示例

```scss
.form {
    /* 自身多类组合 */
    &.active {
        border-color: #0066ff;
    }
    &.disabled {
        opacity: 0.5;
    }
    /* 子元素 */
    .label {
        font-size: 28rpx;
    }
    /* 伪元素 */
    &::after {
        content: '';
    }
}
```

### 实际场景：卡片组件

```scss
.orderCard {
    margin: 0 24rpx 24rpx 16rpx;
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 24rpx;
    .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 34rpx;
            font-weight: bold;
            color: #333333;
        }
        .status {
            font-size: 24rpx;
            color: #999999;
        }
    }
    .cardBody {
        margin-top: 16rpx;
        display: flex;
        gap: 20rpx;
        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8rpx;
        }
    }
    .cardFooter {
        margin-top: 20rpx;
        display: flex;
        justify-content: flex-end;
        gap: 16rpx;
    }
}
```

### 实际场景：列表项

```scss
.userItem {
    display: flex;
    align-items: center;
    padding: 20rpx 16rpx;
    gap: 20rpx;
    .avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        .name {
            font-size: 28rpx;
            color: #333333;
        }
        .desc {
            font-size: 24rpx;
            color: #999999;
            margin-top: 4rpx;
        }
    }
    .action {
        flex-shrink: 0;
    }
}
```

### 实际场景：横向等分布局

```scss
.gridWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
    padding: 24rpx;
    .gridItem {
        width: calc(50% - 10rpx);
        border-radius: 24rpx;
        background-color: #ffffff;
        padding: 24rpx;
        .itemTitle {
            font-size: 28rpx;
            color: #333333;
        }
    }
}
```
