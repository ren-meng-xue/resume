# 任孟雪在线简历

一个基于 `Next.js App Router + TypeScript + Tailwind CSS` 的在线简历站首版，默认面向招聘方/面试官浏览场景设计，适合直接部署到 Vercel。

## 本地启动

```bash
npm install
npm run dev
```

默认访问 [http://localhost:3000](http://localhost:3000)。

## 打包校验

```bash
npm run build
```

## 部署到 Vercel

1. 将当前目录推到 Git 仓库。
2. 在 Vercel 中导入该仓库。
3. Framework Preset 选择 `Next.js`。
4. Build Command 保持默认，Vercel 会执行项目脚本里的 `npm run build`。
5. Output Directory 保持默认。

## 内容维护

- 简历内容数据在 `src/data/resume.ts`
- 页面结构在 `src/app/page.tsx`
- 全局视觉样式在 `src/app/globals.css`
- 原始 PDF 下载文件放在 `public/resume.pdf`
