export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  summary: string;
  tech: string[];
  bullets: string[];
};

export const resumeData = {
  seoTitle: "任孟雪 | WEB 前端工程师",
  seoDescription:
    "5 年经验 WEB 前端工程师，覆盖企业级中后台、大屏数据可视化、国际化、React/Vue 双栈与前端工程化实践。",
  nav: [
    { href: "#projects", label: "精选项目" },
    { href: "#experience", label: "工作经历" },
    { href: "#skills", label: "技术图谱" },
    { href: "#education", label: "教育背景" },
  ] satisfies NavItem[],
  hero: {
    name: "任孟雪",
    title: "WEB 前端工程师",
    summary:
      "5 年前端开发经验，长期负责企业级中后台、数据大屏与业务系统的核心模块研发。擅长把复杂业务拆解成可维护的组件与页面结构，也能在交付节奏里兼顾设计还原、工程效率与稳定性。",
    location: "北京",
    target: "求职方向：中高级前端 / 企业应用 / React & Vue 项目",
    contacts: [
      { label: "邮箱", value: "15601060930@163.com", href: "mailto:15601060930@163.com" },
      { label: "电话", value: "15601060930", href: "tel:15601060930" },
      { label: "PDF 简历", value: "下载原始简历", href: "/resume.pdf" },
    ],
    tags: [
      "中后台系统",
      "数据大屏",
      "国际化",
      "React18",
      "Vue2 / Vue3",
      "TypeScript",
      "Vite / Webpack",
      "Vercel Ready",
    ],
  },
  stats: [
    { value: "5 年", label: "前端经验", detail: "覆盖 ToB 系统、H5、管理后台与可视化场景" },
    { value: "6 个", label: "代表项目", detail: "联想 MCT、大屏、驾培平台、理论练题、计时系统等" },
    { value: "双栈", label: "React + Vue", detail: "既能接手成熟业务，也能从零搭首版工程" },
  ] satisfies Stat[],
  highlights: [
    {
      title: "企业级中后台交付",
      description: "围绕表单、表格、权限、字典、监控与业务流转等模块完成稳定交付。",
    },
    {
      title: "复杂界面拆解能力",
      description: "擅长把多级嵌套、跨模块联动和大屏展示拆成可维护组件与状态结构。",
    },
    {
      title: "跨地域协作与国际化",
      description: "支持联想多个厂区业务，处理时区、翻译与跨团队协作中的前端落地问题。",
    },
    {
      title: "工程与体验并重",
      description: "关注主题切换、渲染性能、请求封装、资源压缩与页面筛选体验等细节。",
    },
  ] satisfies Highlight[],
  projects: [
    {
      title: "联想 MCT 后台系统",
      subtitle: "北京联想总部（派遣） | 企业级中后台",
      summary:
        "面向深圳、天津、布达佩斯等厂区的后台管理系统，承担监控指标、任务管理、查询分析、字典维护与多语言支持等核心功能。",
      tech: ["Vue 3", "TypeScript", "Ant Design Vue", "Vite", "dayjs", "i18n"],
      bullets: [
        "独立负责日常需求研发与问题修复，持续支撑生产、质量、效率等多维业务模块。",
        "处理跨时区场景下的时间展示与逻辑问题，支持多厂区、多地域协同使用。",
        "推进中英西多语言配置，支撑系统级国际化交付。",
        "完成多级嵌套表格、可移动弹窗与分屏拖拽等复杂交互能力建设。",
      ],
    },
    {
      title: "布达佩斯工厂数据大屏",
      subtitle: "联想内部项目 | 多厂区可视化展示",
      summary:
        "用于展示多厂区运营指标与趋势图的大屏系统，支持按厂区钻取查看，兼顾展示稳定性与信息层级清晰度。",
      tech: ["Vue 3", "Tailwind CSS", "SCSS", "Pinia", "ECharts"],
      bullets: [
        "从零适配指定分辨率与展示规则，完成大屏首版结构与样式方案。",
        "封装饼图、柱状图、环状图等常用图表展示模块，支撑多指标快速复用。",
        "实现屏幕之间自动轮播与切换，降低人工维护成本。",
        "持续维护天津、深圳等相关大屏需求，确保展示逻辑一致。",
      ],
    },
    {
      title: "得手驾园管理系统",
      subtitle: "易显科技有限公司 | 驾培业务平台",
      summary:
        "覆盖招、约、训、模、考五大场景的一站式驾校业务管理系统，面向运营、招生、约课与财务等多角色使用。",
      tech: ["Vue 2", "Element UI", "Vuex", "Vue Router", "Sass", "Axios"],
      bullets: [
        "参与从零搭建业务脚手架与请求封装，统一错误拦截、状态码处理与公共方法调用。",
        "抽离全局数据与筛选状态，利用本地存储优化重返页面时的筛选效率。",
        "在高数据量表格场景中优化渲染性能，缓解约课模块卡顿问题。",
        "通过按钮防抖、模板下载封装与主题切换等细节提升整体使用体验。",
      ],
    },
    {
      title: "计时后台管理系统",
      subtitle: "易显科技有限公司 | React 业务系统",
      summary:
        "面向驾校监管业务的计时后台，核心处理学时记录、地图轨迹、考试预约与可视化管理等场景。",
      tech: ["React 18", "TypeScript", "Ant Design", "xRender", "ECharts", "Hooks"],
      bullets: [
        "基于 React18 与 TypeScript 承担主体页面开发，支持主题切换与路由懒加载。",
        "结合百度地图完成轨迹动画与打点数据展示，支撑监管相关业务表达。",
        "基于 xRender / JSON Schema 方案完成表单场景开发，提升复杂表单开发效率。",
        "封装图表初始化与通用能力，降低业务页面接入成本。",
      ],
    },
  ] satisfies Project[],
  experiences: [
    {
      period: "2024.02 - 至今",
      company: "北京联想总部（派遣）",
      role: "前端工程师",
      location: "北京",
      bullets: [
        "负责联想 MCT 后台管理系统功能研发与迭代。",
        "支持不同厂区大屏模块开发，包括布达佩斯、天津、深圳等场景。",
        "参与系统国际化工作，推进中、英、西语配置与落地。",
        "搭建管理小助手、复杂表格与拖拽弹窗等通用能力。",
      ],
    },
    {
      period: "2021.03 - 2023.11",
      company: "易显科技有限公司",
      role: "前端工程师",
      location: "北京",
      bullets: [
        "承担多套驾培业务系统的主体开发，包括管理后台、练题系统和计时平台。",
        "基于设计稿高质量还原页面，兼顾移动端适配与嵌入式页面通信可靠性。",
        "封装自适应表单、表格与业务组件，加快团队开发进度。",
        "参与 code review、文档撰写与日常稳定性优化工作。",
      ],
    },
    {
      period: "2019.09 - 2020.11",
      company: "上海玩墨电子科技有限公司",
      role: "前端工程师",
      location: "上海",
      bullets: [
        "负责 PC 端页面开发与主流浏览器兼容适配。",
        "参与登录注册、权限校验、订单与财务模块等业务功能实现。",
        "配合后端完成接口联调、数据模拟与后台交互流程联测。",
        "支持问题修复、模块优化与可视化展示页面建设。",
      ],
    },
  ] satisfies Experience[],
  skillGroups: [
    {
      title: "前端基础",
      summary: "以扎实的页面实现能力支撑复杂业务交付。",
      items: ["HTML5", "CSS3", "Sass / SCSS", "响应式布局", "移动端适配", "浏览器兼容"],
    },
    {
      title: "框架与状态",
      summary: "既能维护成熟项目，也能快速搭起新业务首版。",
      items: ["Vue 2", "Vue 3", "React 18", "Pinia", "Vuex", "Hooks", "TypeScript"],
    },
    {
      title: "组件与可视化",
      summary: "熟悉企业应用常见交互形态与数据展示方式。",
      items: ["Ant Design", "Element UI", "Element Plus", "ECharts", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "工程化与协作",
      summary: "关注交付效率、代码可维护性与线上体验。",
      items: ["Vite", "Webpack", "请求封装", "国际化", "主题切换", "性能优化", "文档协作"],
    },
  ] satisfies SkillGroup[],
  education: {
    school: "北京外国语大学",
    major: "计算机科学与应用技术",
    degree: "本科",
  },
  selfEvaluation: [
    "长期关注活跃技术社区与官方文档，对新技术保持敏感度。",
    "沟通主动、协作顺畅，能在组内快速对齐需求与交付方案。",
    "愿意深入业务，能把复杂问题拆解成稳定、可落地的前端实现。",
  ],
};
