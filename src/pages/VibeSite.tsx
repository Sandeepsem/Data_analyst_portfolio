import { useEffect, useState, type FormEvent } from 'react'
import {
  Certificates,
  CompanyLogo,
  GithubRepos,
  LightboxGallery,
  NextHorizon,
  ProjectCard,
  Reveal,
  SectionTitle,
  Socials,
  type GalleryState,
} from '../components/ui'
import {
  agentCaps,
  agentPipeline,
  agentSteps,
  aiChecklist,
  aiProjects,
  aiToolCards,
  aiTools,
  aiWorkflow,
  experience,
  profile,
} from '../data/content'
import { scrollToId, useActiveSection } from '../hooks'
import '../vibe.css'

const nav: [string, string][] = [
  ['home', '~/home'],
  ['agents', 'agents'],
  ['analytics', 'ai-analytics'],
  ['projects', 'projects'],
  ['tools', 'tools'],
  ['experience', 'experience'],
  ['certifications', 'certs'],
  ['contact', 'contact'],
]
const ids = nav.map(([id]) => id)

const lines = [
  '$ agent.plan("ship AI web apps + analytics")',
  '> wiring React, MySQL, Firebase & Supabase…',
  '> deployed: GitHub → Hostinger Docker CI/CD ✔',
]

function Terminal() {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    if (shown >= lines.join('\n').length) return
    const t = setTimeout(() => setShown((n) => n + 1), 38)
    return () => clearTimeout(t)
  }, [shown])
  const text = lines.join('\n').slice(0, shown)
  return (
    <pre className="v-term" aria-label={lines.join(' ')}>
      {text}
      <span className="caret" />
    </pre>
  )
}

export default function VibeSite() {
  const active = useActiveSection(ids)
  const [gallery, setGallery] = useState<GalleryState>(null)
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get('subject')))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="site vibe">
      <div className="v-grid" aria-hidden />
      <nav className="v-nav">
        <a href="#/" className="v-brand">&lt;SS/&gt;</a>
        <ul>
          {nav.map(([id, label]) => (
            <li key={id}><button className={active === id ? 'on' : ''} onClick={() => scrollToId(id)}>{label}</button></li>
          ))}
        </ul>
        <a className="v-switch" href="#/analyst">
          <span className="sw-arrow" aria-hidden>←</span>
          <span className="sw-dot" aria-hidden>📊</span>
          <span>Switch to Data Analyst</span>
        </a>
      </nav>

      <section id="home" className="v-hero">
        <div>
          <p className="v-kicker">BUILDING INTELLIGENT SOLUTIONS</p>
          <h1>Prototype Developer <br />&amp; <span className="v-grad">Agentic AI</span></h1>
          <p className="v-lead">
            From ideas to intelligent prototypes, powered by AI agents. I'm {profile.name}: Prototype Developer and Data Analyst using AI tools to analyse, automate, build and ship.
          </p>
          <Terminal />
          <div className="v-cta">
            <button className="v-btn primary" onClick={() => scrollToId('projects')}>See what I built</button>
            <button className="v-btn" onClick={() => scrollToId('analytics')}>Data analytics with AI</button>
          </div>
          <Socials />
        </div>
        <div className="v-hero-img">
          <img src="./banners/vibecoder-agentic-ai.webp" alt="Sandeep Semwal, Prototype Developer and Agentic AI" />
        </div>
      </section>

      <section id="agents">
        <SectionTitle eyebrow="// agentic ai" title="Turning ideas into intelligent solutions with AI agents" />
        <div className="v-pipeline">
          {agentPipeline.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="v-step">
              <span className="v-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="v-agent">
          <div>
            <h3>AI Agent Workflow</h3>
            <ol>{agentSteps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
          <div className="v-bot" aria-hidden>🤖</div>
          <div className="v-caps">
            {agentCaps.map((c) => <span key={c}>{c}</span>)}
          </div>
        </Reveal>
      </section>

      <section id="analytics">
        <SectionTitle eyebrow="// data + ai" title="Data analytics using AI tools" />
        <Reveal className="v-banner">
          <img src="./banners/data-analytics-ai.webp" alt="Data Analytics using AI Tools: Python, Jupyter, Power BI, ChatGPT and Tableau" loading="lazy" />
        </Reveal>
        <p className="v-note">Data + AI = faster, smarter decisions.</p>
        <div className="v-tools">
          {aiToolCards.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="v-tool">
              <strong>{t.name}</strong>
              <span>{t.use}</span>
            </Reveal>
          ))}
        </div>
        <div className="v-two">
          <Reveal className="v-panel">
            <h3>What AI helps me with</h3>
            <ul className="v-check">{aiChecklist.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
          <Reveal className="v-panel" delay={0.1}>
            <h3>My AI-assisted analysis workflow</h3>
            <ol className="v-flow">
              {aiWorkflow.map((w) => (
                <li key={w.step}><b>{w.step}</b><div><strong>{w.title}</strong><span>{w.text}</span></div></li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="projects">
        <SectionTitle eyebrow="// shipped" title="Live Web Apps, Android App & AI Projects" />
        <div className="v-projects">
          {aiProjects.map((p, idx) => (
            <ProjectCard
              key={p.title}
              project={p}
              theme="vibe"
              delay={(idx % 2) * 0.06}
              onOpenGallery={(images, index, title) => setGallery({ images, index, title })}
            />
          ))}
        </div>
      </section>

      <section id="github">
        <SectionTitle eyebrow="// open source" title="GitHub repositories" />
        <GithubRepos />
      </section>

      <section id="tools">
        <SectionTitle eyebrow="// stack & ci/cd" title="Full-Stack, Databases, CI/CD & AI Architecture" />
        <Reveal className="v-panel">
          <div className="v-tags big">{aiTools.map((t) => <span key={t}>{t}</span>)}</div>
          <ul className="v-check">
            <li><strong>Frontend &amp; Mobile:</strong> React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Android (Aptelo on Google Play Store).</li>
            <li><strong>Databases &amp; Backend:</strong> <strong>MySQL</strong>, <strong>Firebase</strong> (Firestore &amp; Auth), <strong>Supabase</strong> (PostgreSQL, Storage &amp; Realtime), and REST APIs.</li>
            <li><strong>CI/CD &amp; Cloud Deployment:</strong> Automated <strong>GitHub → Hostinger Platform</strong> and <strong>Hostinger VPS with Docker</strong> build-and-deploy pipelines.</li>
            <li><strong>AI &amp; Agentic Stack:</strong> Google Gemini Developer API, ChatGPT, Claude AI, Google AI Studio, and Antigravity AI for rapid prototyping &amp; automation.</li>
          </ul>
        </Reveal>
      </section>

      <section id="experience">
        <SectionTitle eyebrow="// history" title="Experience" />
        <div className="v-exp">
          {experience.map((e) => (
            <Reveal key={e.title} className="v-panel">
              <div className="v-exp-head"><h3>{e.title}</h3><span className="v-mono">{e.period}</span></div>
              <p className="v-mono v-company"><CompanyLogo />{e.company} · {e.location}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="exp-tools">
                {e.tools.map((t) => <span key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="certifications">
        <SectionTitle eyebrow="// credentials" title="Certifications & training" />
        <Certificates />
      </section>

      <section id="contact">
        <SectionTitle eyebrow="// connect" title="Let's build something" />
        <div className="v-two">
          <Reveal className="v-panel v-links">
            <a href={`mailto:${profile.email}`}><b>email</b>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><b>linkedin</b>sandeep-semwal</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><b>github</b>Sandeepsem</a>
            <a href="./Sandeep_Semwal_Resume.pdf" download><b>resume</b>download PDF</a>
          </Reveal>
          <Reveal className="v-panel" delay={0.1}>
            <form onSubmit={submit}>
              <input name="name" placeholder="name" required />
              <input name="email" type="email" placeholder="email" required />
              <input name="subject" placeholder="subject" required />
              <textarea name="message" rows={4} placeholder="what should we build?" required />
              <button className="v-btn primary" type="submit">send()</button>
              {sent && <p className="v-mono">opening your email app…</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <section id="next-horizon">
        <SectionTitle eyebrow="// what's next · in progress" title="Agentic AI & n8n Automated Workflows" />
        <NextHorizon />
      </section>

      <footer><Socials />© {new Date().getFullYear()} {profile.name} · <a href="#/">back to start</a></footer>

      <LightboxGallery
        gallery={gallery}
        onClose={() => setGallery(null)}
        onSelect={(index) => setGallery((g) => (g ? { ...g, index } : null))}
      />
    </div>
  )
}
