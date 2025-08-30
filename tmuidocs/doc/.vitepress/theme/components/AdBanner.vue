<template>
  <div class="ad-banner" v-if="showAd && currentAd" :class="{ 'ad-banner--collapsed': isCollapsed }">
    <div class="ad-content">
      <div class="ad-header">
        <span  class="ad-label">
            如果需投广告联系我？
        </span>
        <div class="ad-controls">
          <!-- <button class="collapse-btn" @click="toggleCollapse" :title="isCollapsed ? '展开' : '收起'">
            {{ isCollapsed ? '◀' : '▶' }}
          </button> -->
          <!-- <button class="close-btn" @click="closeAd" title="关闭">×</button> -->
        </div>
      </div>
      
      <div class="ad-body" v-show="!isCollapsed">
        <img :src="currentAd.img" :alt="currentAd.alt" class="ad-image" />
        <div class="ad-text">
          <h4>{{ currentAd.title }}</h4>
          <p>{{ currentAd.description }}</p>
          <a :href="currentAd.href" target="_blank" class="ad-link">
            {{ currentAd.buttonText || '了解更多' }}
          </a>
        </div>
      </div>
      
      <!-- 收起状态显示 -->
      <div class="ad-collapsed" v-show="isCollapsed">
        <span class="ad-collapsed-text">TMUI4.0X</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vitepress'
import { getCurrentAd } from '../config/ads'

const route = useRoute()
const showAd = ref(true)
const isCollapsed = ref(false)

// 获取当前应该显示的广告
const currentAd = computed(() => {
  return getCurrentAd(route.path)
})

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  localStorage.setItem('ad-collapsed', isCollapsed.value.toString())
}

const closeAd = () => {
  showAd.value = false
  localStorage.setItem('ad-closed', 'true')
}

onMounted(() => {
//   // 检查用户是否已经关闭过广告
//   if (localStorage.getItem('ad-closed') === 'true') {
//     showAd.value = false
//   }
  
//   // 检查用户是否已经收起过广告
//   if (localStorage.getItem('ad-collapsed') === 'true') {
//     isCollapsed.value = true
//   }
  
//   // 如果没有广告可显示，隐藏整个组件
//   if (!currentAd.value) {
//     showAd.value = false
//   }
})
</script>

<style scoped>
.ad-banner {
  overflow: hidden;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  height: 170px;
}

.ad-banner--collapsed {
  width: 80px;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.ad-content {
  padding: 16px;
  transition: padding 0.3s ease;
}

.ad-banner--collapsed .ad-content {
  padding: 12px 8px;
}

.ad-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.ad-label {
  font-size: 0.6rem;
  color: #6b7280;
  background: #f3f4f6;
  padding: 0px 8px;
  border-radius: 12px;
}

.ad-controls {
  display: flex;
  gap: 4px;
}

.collapse-btn,
.close-btn {
  background: none;
  border: none;
  font-size: 14px;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.collapse-btn:hover,
.close-btn:hover {
  background: #f3f4f6;
  color: #6b7280;
}

.ad-body {
  display: flex;
  gap: 12px;
}

.ad-image {
  width: 80px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  flex-shrink: 0;
}

.ad-text {
  flex: 1;
  min-width: 0;
}

.ad-text h4 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
}

.ad-text p {
  margin: 0 0 12px 0;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
}

.ad-link {
  display: inline-block;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.ad-link:hover {
  background: #2563eb;
}

/* 收起状态样式 */
.ad-collapsed {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 40px; */
}

.ad-collapsed-text {
  font-size: 16px;
  font-weight: bold;
  color: #3b82f6;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .ad-banner {
    bottom: 10px;
    right: 10px;
    left: 10px;
    width: auto;
  }
  
  .ad-banner--collapsed {
    width: 60px;
  }
  
  .ad-body {
    flex-direction: column;
    text-align: center;
  }
  
  .ad-image {
    width: 100%;
    height: 120px;
  }
  
  .ad-content {
    padding: 12px;
  }
  
  .ad-banner--collapsed .ad-content {
    padding: 8px 6px;
  }
}
</style>
