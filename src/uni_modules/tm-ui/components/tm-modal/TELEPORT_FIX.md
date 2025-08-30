# TM-Modal Teleport 问题解决方案

## 问题描述

在嵌套组件或特殊环境下使用 `tm-modal` 时，可能会遇到以下错误：

```
tm-modal.vue:374 NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
```

这个错误通常是由于 `teleport` 的目标元素在 DOM 结构发生变化时导致的。

## 解决方案

### 1. 自动修复（推荐）

组件现在会自动检测和修复 teleport 目标问题：

- 自动检测可用的目标元素
- 按优先级选择：`#uni-page` > `#app` > `body`
- 在页面更新时重新验证目标元素
- 提供备用渲染方案

### 2. 手动禁用 Teleport

如果自动修复仍然有问题，可以手动禁用 teleport：

```vue
<template>
  <tm-modal 
    v-model:show="showModal" 
    :disable-teleport="true"
    title="禁用 Teleport 的模态框"
  >
    内容
  </tm-modal>
</template>
```

### 3. 配置选项

新增 `disableTeleport` 属性：

```typescript
interface Props {
  /**
   * 是否禁用teleport（H5平台）
   * 在嵌套组件或特殊环境下，可以禁用teleport避免DOM错误
   */
  disableTeleport?: boolean
}
```

## 使用建议

### 何时禁用 Teleport

1. **嵌套组件环境**：当 modal 在复杂的嵌套组件中使用时
2. **动态组件**：在 `v-if`、`v-show` 频繁切换的组件中
3. **路由切换**：在单页应用路由切换时
4. **特殊布局**：在特殊的布局组件中（如侧边栏、抽屉等）

### 性能影响

- **启用 Teleport**：更好的性能，modal 渲染到 body 层级
- **禁用 Teleport**：可能影响性能，但更稳定

### 兼容性

- **H5 平台**：支持 teleport 和禁用选项
- **小程序平台**：使用 `root-portal`，不受影响
- **APP 平台**：不受影响

## 示例代码

### 基础使用（自动修复）

```vue
<template>
  <tm-modal v-model:show="showModal" title="自动修复">
    内容
  </tm-modal>
</template>
```

### 禁用 Teleport

```vue
<template>
  <tm-modal 
    v-model:show="showModal" 
    :disable-teleport="true"
    title="禁用 Teleport"
  >
    内容
  </tm-modal>
</template>
```

### 条件禁用

```vue
<template>
  <tm-modal 
    v-model:show="showModal" 
    :disable-teleport="isNestedComponent"
    title="条件禁用"
  >
    内容
  </tm-modal>
</template>

<script setup>
const isNestedComponent = computed(() => {
  // 检测是否在嵌套组件中
  return getCurrentPages().length > 1
})
</script>
```

## 技术实现

### 自动检测逻辑

```typescript
const getTeleportTarget = () => {
  try {
    // 优先尝试 uni-page
    if (document.querySelector('#uni-page')) {
      return '#uni-page'
    }
    // 备用方案：尝试 app
    if (document.querySelector('#app')) {
      return '#app'
    }
    // 最后备用：body
    return 'body'
  } catch (error) {
    console.warn('Failed to get teleport target:', error)
    return 'body'
  }
}
```

### 备用渲染方案

当 teleport 失败或被禁用时，组件会回退到普通的固定定位渲染：

```vue
<!-- 备用渲染方案：当teleport失败或被禁用时 -->
<view v-if="(props.disableTeleport || !teleportTarget) && showOverflay" 
      class="tmModalWrap tmModalWrap_center tmModalWrap_fallback">
  <!-- 备用内容 -->
</view>
```

## 注意事项

1. **样式差异**：禁用 teleport 后，modal 的层级可能不同
2. **事件冒泡**：在某些情况下，事件冒泡行为可能略有不同
3. **性能监控**：建议在开发环境中监控性能表现
4. **测试覆盖**：在不同环境下测试 modal 的显示效果

## 更新日志

- **v1.3.0** - 添加自动 teleport 目标检测和修复
- **v1.3.0** - 新增 `disableTeleport` 属性
- **v1.3.0** - 提供备用渲染方案
- **v1.3.0** - 优化错误处理和用户体验

---

*如有问题，请参考主文档或提交 issue*
