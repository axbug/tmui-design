export interface AdConfig {
  id: string
  title: string
  description: string
  img: string
  href: string
  buttonText?: string
  alt: string
  startDate?: string
  endDate?: string
  priority?: number
  showOnPages?: string[]
  hideOnPages?: string[]
}

export const adsConfig: AdConfig[] = [
  {
    id: 'tmui-main',
    title: "TMUI4x UniAppx",
    description: "纯正原生开发版本，全平台原生组件，兼容鸿蒙Next原生",
    img: "https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/0306ed00-b46d-11ee-800c-6f5e9833f51b_0.jpg/webp?&v=1716952063",
    href: "https://xui.tmui.design",
    buttonText: "了解最新技术",
    alt: "TMUI4x",
    priority: 1
  }
]

// 获取当前应该显示的广告
export function getCurrentAd(currentPath: string = '/'): AdConfig | null {
  const now = new Date()
  
  // 过滤有效的广告
  const validAds = adsConfig.filter(ad => {
    // 检查日期范围
    if (ad.startDate && new Date(ad.startDate) > now) return false
    if (ad.endDate && new Date(ad.endDate) < now) return false
    
    // 检查页面显示规则
    if (ad.showOnPages && !ad.showOnPages.some(page => currentPath.includes(page))) return false
    if (ad.hideOnPages && ad.hideOnPages.some(page => currentPath.includes(page))) return false
    
    return true
  })
  
  // 按优先级排序，返回优先级最高的
  if (validAds.length > 0) {
    validAds.sort((a, b) => (b.priority || 0) - (a.priority || 0))
    return validAds[0]
  }
  
  return null
}
