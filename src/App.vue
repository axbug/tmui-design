<template></template>
<script lang="ts" setup></script>
<style>
/* 图标必须 */
@import url(@/uni_modules/tm-ui/css/remixicon.min.css);
/* 自定预处理类，可选 */
@import url(@/uni_modules/tm-ui/css/tmui.css);
page {
  background: #f5f5f5;
}



/* // 下方是自定义图标 */
@font-face {
  font-family: "myicon";
  /* Project id 2948283 */
  src:
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXEAAsAAAAADEgAAAV2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDOAqLXIllATYCJAMYCw4ABCAFhE8HTxuACiMR5oNSIPtHYmyLOL9jniVNNNHeTD78b/s6Fy7gEvoiedHlZBvb6kQlzLRORMfXRuL3beu09AkJi9QTa9oX+As+u/4IgP9/P1fnWBqEyLkNbY0Uv9id+dvHVKP2hUKkmVjJZilSSmMpz8OEY+HUKbhXdxYQACJyUQ2mbv2mNpi7e/r3hAoKMZ4AYXXSvUsnD0xXJ2iBnsBk4auuSUGmgwOYScxlANPclyefkE9MAAOOhdhXy4712uP4W8vbGFYzNIB9DB2vFZ2bAcABYAFkjsxNuhfLHcH6mOkaRagsRTkAkyQMgFoQ/jbGMHxNKD8rptAos395DFhQcADhIYwyNTflhRzw1qKjgABvQ6OAAd6G2cG+TOHUDkpNMbQFOAAAj5gXBzA8dbWFsGbiB1N8hger+AVGqhWKQkMjZHoEP+ovUlFR4v1MxXXz3r6t3bnju3dPv3v3h/UR292bbu69jGP37rAlbzu8l4+DaHN88wjRb0nO9ehz2zkcC6+KsvdymM22+zgYbcsByd93aBth9ZM/a+tFP+/G4C+wKNTpnDdPUnxzgu32OQswbO7aoO6rN4NeFb2Fu29nzl8evuOO5CvZdy9nEZE4X2gvBvySvnDw7rtXd+66du/OlR3bL/d6T+fqTnoNM3uvA6JJo9qJK6OIf+0UEfSbg7XD0x4lnL5Jkqi2wbcJoIJyFt8GtFemQI8+kNnaHGdo/NkapdRgHGyonuIwh1ll6W2j9p7SYFYj+kZR9K4HtA1OCeIsCK/dKKRXkh0/RZXmPGIhZk6byeCJTZvdZJK5+jxJ8s0ZHKkzTPSm2oh+85G9fzMoDiH2DQV4bCHsRwdjmTkMpNhLOkUHSSdOyai59q9bt7+pkxXlWCf7N9pk+OQ68U1ow5AZcXW4JiENJwe7Ytr5N6sd67K03Xk7YYWaAGGieaKA1EGpp6nXL/WGZPTYiChrFDYS6rvN4DsJz9VFB1SremCR+jzhTECpEq9Y9VLP5Rc7tkSWTi39W7SKf5cyij3yjhcyqmf1Wb/2Royr3a3QpMJ6acOf1SsLfly12c9VVp3e/Wm98uBvCQRcy6BfxhYkzFoc++tWlpsP5Lxa+nMj3lNc0aJxWGOuVX3XWdo6EZzh0jfiPLl11se43CoP5ax2fNx2a6wppyWoKxIwITpWFmM01a5CozZSjDVparyCAI/z39SiBsJEZZIAYZIykXe9nd+PcoxCkgE7wYf//bEyEfwxt8bdmvody56vZivty3y2XOQjl9UwL5oZsPS0RzBm+VOJPKs11qpxszUuP7MISEazrciwKfwkIbZ9ik43EZXM8cgIf4c9FUfltsDLTXHYAiLgJvVUElG3ZKcbSXC3YETTqFHEOL5sWSyGAzCMsA4lbJzxvzGKxh8NGBoFq4ePYj1VAArmxZE4Fy603NPLZan8zST9ObNfkU4nWKvm3JHEVWaPO/IzRYHCaO+dAfAUnYbpQi7kNFspksdFWPIYAKLMBgyIlAA8xTIHVs4DCPgYdwEGAsKBBY9YJdUmAwcJmchLcwkFERmoWl9CIDqDBaHfAUjGMAIEMlYAAzO2AAsZh5RUew44hOAW8JDxAUQ48NvWJCSPk9fJQDg0VK3U17xI5Xfz6ld+o/WTMHfO5v5hbE8zKU+yRPENC0zdZWxoC+ckScMzXTH2h2liUoYH1C7pnFNlmkroVpKa583JQDg0hGol9DUv0hI3v4TL099o/SQM2CYs+4exb4ZNTMiRICtU3oxLhXZ7rmtDW8BJIkk3NTwTrmNBcJxeMkHBsw2oXYKuQZ4qkcr+ZFVj0q95/lkDAESIbfCEISyhhCM8EcC3E/P67vw4e9vXhwXRHlXHC46hb8CbDQAA') format('woff2');
}

.myicon-camera:before {
  content: "\e60f";
}

.myicon-music:before {
  content: "\e617";
}

.myicon-news:before {
  content: "\e618";
}

.myicon-phone:before {
  content: "\e619";
}

.myicon-video:before {
  content: "\e61f";
}
</style>