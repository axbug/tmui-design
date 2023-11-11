<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const adsImg = [
    { alt: "在线认证小程序，永久免认证只需要100元，不需要300元", img: "https://cdn.tmui.design/gds2023628-2024628.jpg", href: "https://weapp-m.qyyapp.com/", date: "2023-6-28" }
]


</script>

<template>
  <Layout>
    <template #doc-before>
     <div class="tmuiadsss" style="">
          <a :href="item.href" target="_blank" v-for="(item, index) in adsImg" :key="index">
              <img :src="item.img" width="208" />
          </a>
      </div>
    </template>
  </Layout>
</template>
