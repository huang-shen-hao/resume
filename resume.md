# 黄沈浩

**2年工作经验 / 硕士**

- **联系电话：** 188-5197-7115（同微信）
- **邮箱：** 1467788588@qq.com

---

## 教育经历

### 硕士 | 齐齐哈尔大学
**2021年9月 - 2024年6月** | 专业：电子信息

### 本科 | 东南大学成贤学院
**2017年9月 - 2021年6月** | 专业：计算机科学与技术

---

## 工作经历

### 杭州天谷信息科技有限公司 — 前端开发
**2024.2 - 至今**

负责e签宝国内站/国际站 SSR 项目、体验中心小程序/H5、帮助中心以及 esign-website-component 组件库的开发与维护，负责新 CMS（Strapi 5）标准作业程序（SOP）的搭建，实现从 API 设计到内容发布流程的规范化。

### 浙江浙大网新中研软件有限公司 — 前端实习
**2023.9 - 2024.1**

参与浙江省企业登记全程电子化项目改造和升级，主要负责前端流程业务模块的开发以及系统文书打印功能的开发。

### 杭州喜格科技有限公司 — 前端实习
**2023.5 - 2023.9**

参与医疗CRM后台管理系统、移动人力信息管理系统的开发，负责喵小咪小程序的改造和升级。

---

## 项目经历

### e签宝2025年报
**技术栈：** Vue 2.6、vue-property-decorator、Less、tsx

项目简述：LTC 年终项目，客户续费。

**核心贡献：**

1. 封装并发请求控制器，实现首页 API 请求限流，结合 Promise.allSettled，优化首页请求。
2. 基于 HammerJS 实现页面手势切换，PC/移动端双容器适配，提供全屏/手势/滚轮三套交互方案；针对 PC 端实现滚轮防抖翻页；补充 macOS 触控板方向判断。
3. 基于 html2canvas 实现截图分享功能，针对 CSS 复杂样式，采取 img 替换的降级方案。
4. 针对高清屏模糊，动态控制 Scale 阈值，避免微信端高 DPR 导致内存占用过大。
5. 针对低端机内存溢出（OOM），优化渲染节点，避免整体 DOM 的绘制，极大降低了绘制引擎的解析压力。
6. 封装 preloadNextPageBgByIndex 实现背景图按需预加载逻辑，结合 rAF 控制背景图就绪时机，不阻塞当前页面资源。
7. 针对微信小程序 Webview 中路由切换图片缓存失效导致页面闪烁问题，通过 PAGE_LIST 配置映射页面路由，结合 history.replaceState 同步 URL 实现缓存共享。
8. 基于 Agent Plan 实现了内网项目的敏捷迁移与快速部署，效率提升 90%。
9. 封装 FunSection 组件的配置化内容渲染，根据 featureName 动态映射文案，开发效率提升 50%，降低回归测试成本。

### e签宝国内站、国际站
**技术栈：** Nuxt.js、Vuex、Pinia、Element UI、Element Plus

项目简述：基于 Nuxt.js 的服务端渲染的门户项目。

**核心贡献：**

1. 负责新 CMS 系统的 PoC，国际站打通 16 多语言，OSS 配置 AWS-S3。
2. 业务方提供大量发文文本，多语言翻译，发布，记录，失败重试。
3. 网站问题改造，开发 esign-website-components 组件库，实现 CMS 系统维护的导航栏、侧边栏，代码工程化。
4. 基于 Figma MCP 开发 design-assistant skill，实现用户页面的快速开发。
5. 开发售前 skill，对接企业内部 Agent，实现智能体售前业务。
6. 针对大量富文本文章带来的服务端渲染的性能瓶颈问题，通过 hook 与中间件实现静态 HTML 缓存 S3，前端直接请求 CDN，减少服务器压力。
7. 负责 esign.ai 网架构设计（Nuxt 4），基于 agent plan 模式实现多业务迁移。
8. 封装 useRetain、useGoogleRecaptcha、useSms、useRegion 等全局 Hook，基于 useRegion 实现动态首页、落地页与手机号区分国内外。
9. 设计多场景表单，集成神策埋点和 AB 测试，支持更加细致的线索分流与转化追踪。
10. SEO 优化，基于 @nuxtjs/sitemap 实现站点地图生成。
11. 封装 40+ 业务组件和通用组件，实现代码复用和维护性提升。
12. 负责体验中心页面设计与开发，维护场景元数据，实现动态展示 20+ 行业的场景体验。
13. 开发手写签名、键入签名，在线生成印章功能。
14. 本地部署 SonarQube，对项目问题进行定量问题分析。

### esign-website-components
**技术栈：** Vue 2、Rollup、Vuex、Element UI

项目简述：门户网站 Vue 2 组件库，提供通用导航栏、侧边栏和底部组件。采用 Rollup 构建。

**核心贡献：**

1. 使用 Rollup 构建多模块格式输出 ESM + UMD，通过 package.json 的 module 和 main 字段分发入口，支持不同场景的引入方式。
2. 规范组件具名导出原则，阻断原型链污染等副作用，通过配置 sideEffects: ["*.css", "*.less"] 避免打包时样式被错误剔除。
3. 利用 rollup-plugin-postcss 将 .vue 单文件组件中的样式提取成独立的 .css 文件，实现 ESM 产物支持细粒度的按需引入，对 UMD 产物则全量抽离为统一的 index.min.css，优化加载性能。
4. 开发 Header、SideBar、价格计算器组件，支持移动端、PC 端适配；同时配置自动化发布命令，实现组件库版本管理规范化。

### e签宝体验中心小程序
**技术栈：** uni-app 3、Vue 3、TypeScript、Pinia、Vite 5

项目简述：ToB 小程序应用，提供产品体验、案例展示、免费试用申请等功能，助渠道合伙人业务推广获客。

**核心贡献：**

1. 开发自定义 tabbar，通过帧动画实现中心图标的动态切换展示。
2. 基于 Promise 对 uni.request 二次封装、Cookie 兼容大小写优化、业务码/状态码分流、401 自动跳转授权、错误提示单例锁防抖。
3. 划分了 AUTH、H5、AGREEMENTS 分包并通过按需实例化、惰性求值策略实现主包体积优化。
4. 集成神策 sa-sdk-miniprogram，利用埋点提升数据可见性，支持运营归因分析。
5. 基于 mp-html 富文本组件实现点击富文本中链接跳转公众号视频的功能。
6. 自定义 Hooks，实现了鉴权跳转（useAuthUrl）、日期对比（useDateCompare）、神策埋点（useTsignData）等逻辑复用。
7. 通过 UpdateManager 监听小程序有版本更新，新版本下载完成后引导一键重启升级，失败兜底提示。

### e签宝体验中心（H5项目）
**技术栈：** Vue 2、Vuex、Vue Router、EDM 组件库、Less

项目简述：面向 B 端客户的 SaaS 产品演示平台，聚合 CRM、EHR、OA、AI Agent 等真实业务场景，用于售前演示及自助体验。

**核心贡献：**

1. 基于 afme-flexible 与 postcss-pxtorem 实现自适应布局。
2. 通过动态配置 rootValue 实现业务代码与组件库适配冲突问题。
3. 针对企业内部组件库，使用 ES6+ 语法导致低版本浏览器兼容性问题，通过 transpileDependencies 配置 Babel 转译。
4. 首页 UI 重构，基于 keep-alive 实现返回首页时锚点定位，加强用户体验。
5. 负责不动产、公积金、保险、招投标、海外签、AI Agent 等多个场景的开发。
6. 基于 Vibe Coding 实现 AI Agent Demo 开发，封装 AgentBubble、UserBubble、AgentBaseLayout 等组件，实现流式对话、深度思考、多类型内容展示以及协商草拟、合同审查等核心功能开发。

### strapi-cms
**技术栈：** Strapi 5、MySQL、RDS、阿里云 OSS

项目简述：基于 Strapi 5 的 Headless CMS，用于管理门户新内容数据。

**核心贡献：**

1. 负责项目的初始搭建、RDS 数据库配置、阿里云 OSS 配置。
2. 集成 CKEditor 5 插件，支持 Markdown 预设。
3. 实现环境隔离，不同环境使用不同的配置文件和数据库。

### 浙江省企业登记全程电子化项目
**技术栈：** Vue 3、Vuex、Element Plus、TypeScript、axios

项目简述：浙江省企业登记全程电子化后台。

**核心贡献：**

1. 负责基本信息流程模块以及打印模块。
2. 封装了全局身份证校验抽屉组件，项目中多处使用，提升了开发效率。
3. 利用 keep-alive 缓存组件，在业务子流程切换时候不会频繁请求，提升用户体验。
4. 开发了一套通用的打印相关组件以及通用函数，项目全局使用（NTKO 控件）。
5. 旧的代码日常优化重构。

### Vibe Coding 个人项目 — A2C
**技术栈：** Vue 3、Express.js、Element Plus、TypeScript、MySQL、TypeORM、BullMQ
**项目地址：** http://a2c.liuliuche.top/doc-center/login

项目简述：基于 Vue 3 + Express.js 的多租户 SaaS 平台，整合 Strapi 5 Headless CMS，提供统一身份认证、品牌曝光监测（GEO）、AI 内容生成及内容管理能力。

**核心贡献：**

1. 设计并实现支持多租户/多组织的 SaaS 底层架构。构建动态大模型调度逻辑，支持企业客户自带密钥与系统全局 Key 的无缝回退切换，并通过底层模型管理表实现按需分配。
2. 设计 BullMQ + Redis 分布式任务队列，支持每日/每周/每月定时调度，Worker 并发处理多模型×多问题的跑批任务。
3. 代理 Strapi CMS 认证流程，设计并落地双 Token 机制。
4. 实现 ECharts 可视化数据大盘，针对品牌曝光监测（GEO）业务，完成品牌提及率、首推率等核心商业指标的多维度筛选与动态渲染。
5. 批量发文设计四步流水线：Excel 解析 → Prompt 配置 → 批量生成 → 发布管理，基于 p-limit 并发控制。
6. 关联 CMS 系统多语言信息，支持一键翻译以及一键多语言发布，同时实现 docx 库导出 Word 文档，满足离线审校需求。

---

## 专业技能

- 熟练掌握 ES6+ / HTML5 / CSS3 新特性并能使用 Promise、async/await 等处理异步编程，编写清晰、可维护的异步代码
- 熟练掌握 Nuxt 2 框架且具备性能优化、打包优化、SEO 优化经验
- 熟练掌握 Vue 2/3 框架与 Element UI、Element Plus 组件库的使用，并且能对组件库进行二次开发封装
- 熟练掌握 uni-app 框架开发微信小程序，具备从 0 开发小程序的经验
- 熟练掌握 Cursor、Figma Make、OpenCode 等 AI 工具，具备 Vibe Coding 从 0 开发项目经验
- 掌握 RAG、MCP 基础知识，具备 Skill 开发能力
- 掌握 Webpack、Vite 构建工具的配置与使用，通过环境变量实现多环境（本地/测试/预发/生产）构建与部署
- 掌握业务组件库的搭建以及 Rollup 构建打包（ESM/UMD）
- 掌握 Aliyun Flow（云效）自动化流水线，能独立从 0 搭建工程化的前端项目
- 掌握 React 库的基本开发
- 掌握 Echarts 大数据平台开发
- 掌握影刀 RPA 的使用
- 熟悉微前端框架的基础原理以及使用

---

## 科研成果

硕士阶段发表过 SCI 3 区论文：https://www.cell.com/heliyon/pdf/S2405-8440(24)02176-5.pdf

---

## 相关链接

- 掘金：https://juejin.cn/user/1667309606017181
- GitHub：https://github.com/huang-shen-hao?tab=repositories
- npm：https://www.npmjs.com/~huangshenhao
•