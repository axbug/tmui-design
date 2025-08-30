<script setup>
import DefaultTheme from 'vitepress/theme'
import AdBanner from './components/AdBanner.vue'


const { Layout } = DefaultTheme
const adsImg = [
    { alt: "在线认证小程序，永久免认证只需要100元，不需要300元", img: "https://cdn.tmui.design/gds2023628-2024701.jpg", href: "https://ndpay.qyyapp.com/", date: "2024-7-1" }
]
</script>

<template>
  <Layout>

    <!-- <template #doc-before>
     <div class="tmuiadsss" style="">
          <a :href="item.href" target="_blank" v-for="(item, index) in adsImg" :key="index">
              <img :src="item.img" width="208" />
          </a>
      </div>
    </template> -->
    
    <Content />
    <template #layout-bottom>
    <!-- 右下角广告横幅 -->

      <AdBanner />

    </template>
  </Layout>
</template>
