import type { ReactNode } from "react";

import { resumeData } from "@/data/resume";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
    </div>
  );
}

function Surface({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`panel ${className ?? ""}`.trim()}>{children}</div>;
}

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(14,165,233,0.16),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.64),_transparent_22%)]" />

      <header className="mx-auto max-w-7xl px-6 pb-6 pt-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/65 bg-white/72 px-6 py-5 shadow-[0_18px_80px_rgba(15,23,42,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              任孟雪
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">Frontend Resume Site / Next.js App Router</p>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
            {resumeData.nav.map((item) => (
              <a key={item.href} className="anchor-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 md:px-8 lg:px-10">
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Surface className="relative overflow-hidden p-8 md:p-10">
            <div className="hero-orb hero-orb-left" />
            <div className="hero-orb hero-orb-right" />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                {resumeData.hero.location} · {resumeData.hero.target}
              </span>

              <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold tracking-[-0.06em] text-[var(--ink)] md:text-7xl">
                {resumeData.hero.name}
              </h1>
              <p className="mt-3 font-display text-2xl font-medium tracking-[-0.04em] text-[var(--accent-strong)] md:text-3xl">
                {resumeData.hero.title}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {resumeData.hero.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-cta" href="/resume.pdf" download>
                  下载 PDF 简历
                </a>
                <a className="secondary-cta" href="mailto:15601060930@163.com">
                  发邮件联系
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {resumeData.hero.contacts.map((contact) => (
                  <a
                    key={contact.label}
                    className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/88 px-4 py-2 text-sm text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
                    href={contact.href}
                  >
                    <span className="font-medium text-[var(--ink)]">{contact.label}</span>
                    <span>{contact.value}</span>
                  </a>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {resumeData.hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[var(--chip)] px-4 py-2 text-sm text-[var(--ink-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Surface>

          <div className="grid gap-6">
            <Surface className="p-6 md:p-7">
              <p className="eyebrow">Snapshot</p>
              <div className="mt-6 grid gap-4">
                {resumeData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5"
                  >
                    <div className="font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm font-medium text-[var(--ink-soft)]">{stat.label}</div>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </Surface>

            <Surface className="p-6 md:p-7">
              <p className="eyebrow">Strengths</p>
              <div className="mt-6 grid gap-4">
                {resumeData.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-[24px] border border-[var(--line)] bg-white/80 px-5 py-5"
                  >
                    <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <SectionHeading
            eyebrow="Projects"
            title="用项目说明能力，而不是只罗列技术名词"
            description="首屏之外，最重要的是让招聘方快速判断你做过什么规模、承担了什么角色、是否能独立把事情做成。这里优先展示最能代表你当前竞争力的 4 个项目。"
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {resumeData.projects.map((project) => (
              <Surface key={project.title} className="p-7 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]">
                    Featured
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-medium text-[var(--ink-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-[var(--muted)] before:mt-3 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Surface>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20">
          <SectionHeading
            eyebrow="Experience"
            title="工作经历聚焦在你承担的责任，而不是只写参与过"
            description="你的经历从电商后台、驾培业务平台再到联想企业级系统，路径非常适合包装成“复杂业务长期交付型前端”。时间线要让人一眼看懂你不断往更重业务、更高复杂度场景升级。"
          />

          <div className="mt-10 grid gap-6">
            {resumeData.experiences.map((item) => (
              <Surface key={`${item.company}-${item.period}`} className="p-7 md:p-8">
                <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                  <div className="space-y-2">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      {item.period}
                    </p>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {item.company}
                    </h3>
                    <p className="text-sm text-[var(--ink-soft)]">
                      {item.role} · {item.location}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-7 text-[var(--muted)] before:mt-3 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-[var(--accent-strong)] before:content-['']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-20 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Surface className="p-7 md:p-8">
            <SectionHeading
              eyebrow="Skill Map"
              title="技术图谱"
              description="技术栈不追求堆满，而是围绕你真正长期使用、能支撑业务交付的能力来呈现。"
            />

            <div className="mt-8 space-y-4">
              {resumeData.selfEvaluation.map((item) => (
                <div key={item} className="rounded-[22px] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4">
                  <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </Surface>

          <div className="grid gap-6 sm:grid-cols-2">
            {resumeData.skillGroups.map((group) => (
              <Surface key={group.title} className="p-6 md:p-7">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-white/85 px-3 py-2 text-xs font-medium text-[var(--ink-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section id="education" className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-7 md:p-8">
            <p className="eyebrow">Education</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {resumeData.education.school}
            </h2>
            <p className="mt-3 text-base text-[var(--muted)]">
              {resumeData.education.major} · {resumeData.education.degree}
            </p>
          </Surface>

          <Surface className="p-7 md:p-8">
            <p className="eyebrow">Close</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              这个站点接下来还可以继续增强
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <li className="flex gap-3 before:mt-3 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']">
                增加项目详情页，把每个项目的业务背景、难点和结果展开写透。
              </li>
              <li className="flex gap-3 before:mt-3 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']">
                补充英文版或中英切换，进一步体现国际化能力。
              </li>
              <li className="flex gap-3 before:mt-3 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']">
                接入访客联系表单或简历投递埋点，再配合 Vercel Analytics 做数据观察。
              </li>
            </ul>
          </Surface>
        </section>
      </main>
    </div>
  );
}
