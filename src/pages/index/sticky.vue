<template>
  <view >
    <tm-sticky>
      <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">粘性布局 TmStikcy</tm-text>
        <view>
          <tm-text>可以当作页面根节点悬浮,也可以当作局部悬浮总之方便.如果当页面根节点也不影响性能因为只有一个节点.</tm-text>
        </view>
      </tm-sheet>

      <tm-sticky-header>
        <tm-sheet color="success" height="44px" :margin="[24, 0]" :padding="[24, 0]"
          class="flex flex-row flex-row-center-start">
          <tm-text color="white" font-size="28" class="text-weight-b d-block">滑动我被悬浮</tm-text>
        </tm-sheet>
      </tm-sticky-header>
      <tm-sheet margin="24" :height="150"></tm-sheet>

      <tm-sheet :margin="24">
        <tm-text font-size="28" class="text-weight-b d-block">通过修改偏移量保持在上个下方</tm-text>
      </tm-sheet>
      <tm-sticky-header top="44px">
        <tm-sheet color="primary" height="44px" :margin="[24, 0]" :padding="[24, 0]"
          class="flex flex-row flex-row-center-start">
          <tm-text font-size="28" color="white" class="text-weight-b d-block">我会在上个悬浮下方</tm-text>
        </tm-sheet>
      </tm-sticky-header>
      <tm-sheet margin="24" height="150"></tm-sheet>
      <tm-sticky-header>
        <tm-sheet color="error" height="44px" :margin="[24, 0]" :padding="[24, 0]"
          class="flex flex-row flex-row-center-start">
          <tm-text font-size="28" color="white" class="text-weight-b d-block">我会盖住第一个上方</tm-text>
        </tm-sheet>
      </tm-sticky-header>

      <view style="height: 1500px;"></view>
    </tm-sticky>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

</script>

<style></style>
