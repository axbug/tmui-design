---
title: MCP和CLI
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

##### 开发指南 tmui.design

# tmui-cli 介绍与使用

`tmui-cli` 是 TMUI DESIGN 的终端工具：在命令行里创建或升级 uniapp CLI / HBX 项目，也可以作为 IDE 的 MCP 服务，让 Cursor、VS Code 等 Agent 直接查组件文档、创建项目。

需要 **Node.js 22.18+**。

## 安装

```bash
npm i -g tmui-cli
tmui
```

Windows / macOS / Linux 命令相同。macOS 若提示权限、需要 `sudo`，不要用 sudo 装全局包；请用 nvm 管理 Node，再执行上面的命令。

也可以不装全局，用 npx：

```bash
npx -y tmui-cli
```

## 交互菜单（`tmui`）

在任意目录执行 `tmui` 会打开终端菜单（不是浏览器页面）：

1. 打印 TMUI DESIGN logo
2. 检测当前目录是否已是 uniapp 项目
3. 选择操作

| 菜单 | 说明 |
| --- | --- |
| 创建项目 | CLI / HBX 模板 + TMUI |
| 升级项目 | 升级 TMUI 或 UniSdk |
| 访问官网主页 | 用系统默认浏览器打开 https://tmui.design |
| 退出 | 结束进程 |

按键：`↑/↓` 选择，`Enter` 确认，`Esc` 返回，`Ctrl+C` 退出。

### 创建项目

依次选择：项目类型（CLI / HBX）→ 目录 → 名称 → TMUI 版本 →（仅 CLI）UniSdk 通道与版本 → npm 或 pnpm。

- CLI：推荐，可用 VS Code / Cursor 等命令行编译
- HBX：仅 HBuilderX
- 依赖安装固定走阿里云源 `https://registry.npmmirror.com`

### 升级项目

- TMUI：下载组件库到 `uni_modules/tm-ui`（3.1 为 `tmui`）
- UniSdk：仅 CLI 项目，改 `package.json` 后用所选 npm/pnpm 安装

当前目录不是 uniapp 项目时，升级会先让你选择项目目录。

## MCP（给 Cursor / VS Code 等 IDE 用）

`tmui mcp` 启动 MCP stdio 服务，**不会**打开交互菜单。stdout 只走协议，供 IDE 拉起。

全局安装后，在 IDE 的 MCP 配置里写：

```json
{
  "mcpServers": {
    "tmui": {
      "command": "tmui",
      "args": ["mcp"]
    }
  }
}
```

或用 npx（无需全局安装）：

```json
{
  "mcpServers": {
    "tmui": {
      "command": "npx",
      "args": ["-y", "tmui-cli", "mcp"]
    }
  }
}
```

Cursor 写在项目级 `.cursor/mcp.json`，VS Code / Copilot 写在用户或工作区的 MCP 配置，字段同样是 `command` + `args`。配好后重启或刷新 MCP 连接。

### 提供的工具

| 工具 | 说明 |
| --- | --- |
| `create_uniapp_hbx_project` | 创建 uniapp HBuilderX 项目（含 TMUI） |
| `create_uniapp_cli_project` | 创建 uniapp CLI 项目（自动安装依赖，含 TMUI） |
| `query_tmui_config` | 查询组件库全局配置（mode / unit / radius / color 等） |
| `list_components` | 列出全部组件，按分类分组 |
| `get_component_doc` | 获取单个组件文档与示例（如 `tm-button`） |
| `query_tmui_doc` | 查询引导/配置文档（常见问题、快速上手、安装等） |

创建类工具与交互菜单共用同一套创建逻辑。CLI 项目未指定版本时，默认取 CDN 最新 TMUI、正式包最新 UniSdk，安装器默认 npm。
