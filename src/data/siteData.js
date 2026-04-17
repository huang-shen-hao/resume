export const navItems = [
  { id: 'about', label: '简介' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技能' },
  { id: 'contact', label: '联系' },
];

export const heroData = {
  eyebrow: '黄沈浩 / 2年经验 / 硕士 / Frontend Engineer',
  title: ['前端不只是搭页面，', '而是把内容、系统、性能与交付一起落地。'],
  description:
    '当前在杭州天谷信息科技有限公司，负责 e签宝国内站/国际站 SSR、体验中心小程序/H5、帮助中心、组件库和 Strapi 5 CMS SOP。擅长在复杂业务中同时兼顾体验叙事、工程质量和发布效率。',
  meta: [
    { label: '工作年限', value: '2 年前端开发经验' },
    { label: '学历背景', value: '齐齐哈尔大学 硕士 / 东南大学成贤学院 本科' },
    { label: '联系方式', value: '188-5197-7115 / 1467788588@qq.com' },
  ],
};

export const aboutData = {
  title: '我做的是“可交付”的前端：既讲体验，也讲系统。',
  body: '从浙江省企业登记全程电子化项目，到 e签宝门户、体验中心和 CMS，再到多租户 SaaS 项目 A2C，我更关注完整链路是否成立：信息结构、交互节奏、渲染性能、可维护性和业务指标需要一起跑通。',
  cta: {
    label: '查看项目经历',
    href: '#projects',
  },
};

export const profileMetrics = [
  { value: '2+', label: '年前端经验' },
  { value: '8+', label: '核心项目交付' },
  { value: '40+', label: '组件与模块封装' },
];

export const audienceLoopPhrases = [
  '你可能是正在做 SSR 门户升级的团队',
  '你可能是需要 CMS 发布提效的内容团队',
  '你可能是要兼顾品牌感与性能稳定的项目组',
  '你可能是正在建设 AI Native 工作流的产品团队',
  '你可能是需要从 0 到 1 落地前端工程体系的创业团队',
];

export const clientBelt = [
  'e签宝',
  'e签宝国际站',
  '浙江省企业登记全程电子化',
  'e签宝体验中心',
  'esign-website-components',
  'strapi-cms',
  'A2C',
  '医疗CRM',
];

export const projectItems = [
  {
    client: 'e签宝2025年报',
    title: '复杂动效与性能稳定并行的年终品牌项目交付。',
    summary: '完成手势/滚轮/全屏三套交互方案、截图分享能力、低端机 OOM 优化与按需资源预加载。',
    year: '2025',
    tone: 'light',
    stack: 'Vue 2.6 / vue-property-decorator / Less / TSX / HammerJS',
    tags: ['Performance', 'Interaction', 'Stability'],
    highlights: [
      '封装并发请求控制器，结合 Promise.allSettled 优化首页请求节奏与稳定性。',
      '实现全屏/手势/滚轮三套交互方案，补充 macOS 触控板方向判断与滚轮防抖翻页。',
      '基于 html2canvas 完成截图分享，复杂样式采用 img 降级，控制高清屏模糊与高 DPR 内存风险。',
      '优化低端机 OOM：缩减渲染节点与绘制压力，改善微信 Webview 路由切换闪烁问题。',
      '封装 preloadNextPageBgByIndex，配合 rAF 做背景图按需预加载，降低资源阻塞。',
    ],
  },
  {
    client: 'e签宝国内站 / 国际站',
    title: 'SSR + CMS + 组件库的一体化内容生产链路。',
    summary: '负责 16 语言站点发布链路、S3/CDN 缓存策略、全局 hooks 与 40+ 组件封装。',
    year: '2024',
    tone: 'dark',
    stack: 'Nuxt.js / Vuex / Pinia / Strapi 5 / AWS S3 / Element UI+',
    tags: ['SSR', 'CMS', 'i18n'],
    highlights: [
      '推进新 CMS PoC，打通国际站 16 语言内容发布流程与失败重试机制。',
      '通过 hooks 与中间件实现静态 HTML 缓存至 S3/CDN，缓解富文本 SSR 性能瓶颈。',
      '开发 esign-website-components，沉淀导航栏、侧边栏等可复用模块并完成工程化治理。',
      '封装 useRetain / useGoogleRecaptcha / useSms / useRegion 等全局 hooks，支撑多地域业务差异化。',
      '落地 SEO 与多场景表单埋点、AB 测试能力，提升线索分流与转化追踪精度。',
    ],
  },
  {
    client: 'e签宝体验中心小程序/H5',
    title: 'ToB 体验平台的多端一致性与可运营化建设。',
    summary: '覆盖分包优化、埋点体系、富文本能力、鉴权 hooks 与多业务场景模块化开发。',
    year: '2024',
    tone: 'sepia',
    stack: 'uni-app 3 / Vue 3 / TS / Pinia / Vite 5 / Vue 2',
    tags: ['Mini Program', 'Analytics', 'Engineering'],
    highlights: [
      '开发自定义 tabbar 与中心图标帧动画，优化产品体验展示与品牌一致性。',
      '二次封装 uni.request，补齐业务码分流、401 自动授权与错误提示单例锁防抖。',
      '通过 AUTH/H5/AGREEMENTS 分包及惰性求值策略优化主包体积与首屏速度。',
      '集成神策埋点体系，支持运营归因与转化分析；补充富文本链接跳转与版本更新机制。',
      'H5 侧完成 keep-alive 首页锚点定位、组件库兼容转译与多个垂直业务场景页面交付。',
    ],
  },
  {
    client: 'A2C',
    title: 'Vibe Coding 驱动的多租户 SaaS 与 AI 工作流平台。',
    summary: '实现 BullMQ 队列调度、多模型路由、GEO 可视化大盘、批量生成发布流水线。',
    year: '2023',
    tone: 'graphite',
    stack: 'Vue 3 / Express.js / TS / MySQL / TypeORM / BullMQ / Redis',
    tags: ['SaaS', 'AI Workflow', 'Data Dashboard'],
    highlights: [
      '设计多租户/多组织架构，支持企业自有 Key 与系统 Key 无缝回退切换。',
      '落地 BullMQ + Redis 分布式任务队列，支撑多模型并发与日/周/月定时调度。',
      '代理 Strapi CMS 认证流程并实现双 Token 机制，提升权限和会话治理能力。',
      '实现 GEO 可视化看板，支持品牌提及率、首推率等核心指标筛选与动态渲染。',
      '打通 Excel 解析 → Prompt 配置 → 批量生成 → 发布管理流水线，结合 p-limit 控制并发。',
    ],
  },
];

export const capabilityEntries = [
  {
    title: 'Nuxt SSR + SEO + 多语言',
    body: '具备 Nuxt 2 SSR 性能优化、站点地图、多语言发布和缓存链路搭建经验。',
    label: 'Portal Engineering',
  },
  {
    title: 'Vue 2/3 + 组件库工程化',
    body: '熟练 Vue2/3 与 Element UI/Plus，具备组件库封装、Rollup 构建和版本管理实践。',
    label: 'Frontend System',
  },
  {
    title: 'AI Workflow + SaaS 架构',
    body: '可独立完成任务队列、模型调度、内容生成与可视化的端到端业务闭环设计。',
    label: 'AI Native',
  },
];

export const ethosItems = [
  {
    id: '01',
    title: '业务理解驱动实现',
    body: '先梳理业务目标与指标，再设计前端结构，确保交付结果能直接支撑业务增长。',
  },
  {
    id: '02',
    title: '系统化工程落地',
    body: '从 API 到 CMS 到组件库再到发布流程，所有环节标准化后，效率和质量才能稳定。',
  },
  {
    id: '03',
    title: '性能与体验平衡',
    body: '兼顾动效表达与端侧性能，通过预加载、并发控制、缓存与降级策略兜住稳定性。',
  },
  {
    id: '04',
    title: '快速迭代与复用',
    body: '强调组件化与 hooks 复用，结合埋点、AB 测试和问题量化分析持续迭代体验。',
  },
];

export const focusEntries = [
  {
    title: 'e签宝2025年报',
    body: '并发请求控制、手势切换、html2canvas截图、OOM优化、背景图按需预加载。',
  },
  {
    title: 'e签宝国内站/国际站',
    body: '16语言发布、S3/CDN静态缓存、全局 hooks、多场景表单、SEO 与 AB 测试。',
  },
  {
    title: 'esign-website-components',
    body: 'Rollup 多格式构建、样式 sideEffects 策略、Header/SideBar/价格计算器组件交付。',
  },
  {
    title: '体验中心小程序',
    body: '分包优化、uni.request二次封装、埋点体系、富文本能力与更新升级机制。',
  },
  {
    title: 'strapi-cms',
    body: '项目初始化、RDS/OSS配置、CKEditor5 集成、环境隔离策略落地。',
  },
  {
    title: 'A2C 多租户 SaaS',
    body: 'BullMQ+Redis 调度、多模型回退、GEO 可视化、Excel→Prompt→生成→发布流水线。',
  },
];

export const journalEntries = [
  {
    title: '浙江省企业登记全程电子化项目',
    excerpt: '负责流程业务模块和打印模块，封装身份证校验抽屉组件及通用打印能力，提升系统复用性。',
    category: '实习项目',
  },
  {
    title: '科研成果：SCI 三区论文',
    excerpt: '硕士阶段发表论文，主题为深度学习在胸椎压缩性骨折识别中的应用。',
    category: 'Research',
  },
];

export const experienceEntries = [
  {
    period: '2024.2 - 至今',
    role: '前端开发',
    company: '杭州天谷信息科技有限公司',
    summary:
      '负责 e签宝国内站/国际站 SSR、体验中心小程序/H5、帮助中心、组件库和 Strapi 5 CMS SOP 搭建。',
  },
  {
    period: '2023.9 - 2024.1',
    role: '前端实习',
    company: '浙江浙大网新中研软件有限公司',
    summary:
      '参与浙江省企业登记全程电子化项目改造升级，负责流程模块和系统文书打印能力开发。',
  },
  {
    period: '2023.5 - 2023.9',
    role: '前端实习',
    company: '杭州喜格科技有限公司',
    summary:
      '参与医疗 CRM、移动人力信息管理系统开发，负责喵小咪小程序改造升级。',
  },
];

export const educationEntries = [
  {
    school: '齐齐哈尔大学',
    degree: '硕士 / 电子信息',
    period: '2021.09 - 2024.06',
  },
  {
    school: '东南大学成贤学院',
    degree: '本科 / 计算机科学与技术',
    period: '2017.09 - 2021.06',
  },
];

export const skillTags = [
  'ES6+ / HTML5 / CSS3',
  'Nuxt 2 SSR / SEO / Sitemap',
  'Vue 2 / Vue 3 / Element UI / Element Plus',
  'uni-app 3 / 小程序',
  'Strapi 5 / CMS SOP',
  'Rollup / Webpack / Vite',
  'BullMQ / Redis / TypeORM',
  'ECharts / 数据看板',
  'AI Workflow / MCP / Skill 开发',
  'SonarQube / 工程质量治理',
];

export const externalLinks = [
  { label: '掘金', href: 'https://juejin.cn/user/1667309606017181' },
  { label: 'GitHub', href: 'https://github.com/huang-shen-hao?tab=repositories' },
  { label: 'NPM', href: 'https://www.npmjs.com/~huangshenhao' },
  { label: 'A2C 项目', href: 'http://a2c.liuliuche.top/doc-center/login' },
  { label: 'SCI 论文', href: 'https://www.cell.com/heliyon/pdf/S2405-8440(24)02176-5.pdf' },
];

export const contactData = {
  eyebrow: 'keep in touch',
  title: ['如果你需要可快速交付、可持续演进的前端方案，', '欢迎随时联系我沟通。'],
  description:
    '我擅长的场景是：既要业务落地速度，也要工程质量和可维护性。可以从品牌站、SSR 门户、CMS 到 AI 工作流系统一起推进。',
  email: '1467788588@qq.com',
  phone: '188-5197-7115',
  location: 'Hangzhou / Remote',
};
