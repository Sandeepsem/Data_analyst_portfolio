import { useState, type FormEvent } from 'react'
import {
  Certificates,
  CompanyLogo,
  Counter,
  GithubRepos,
  LightboxGallery,
  NextHorizon,
  ProjectCard,
  Reveal,
  SectionTitle,
  SkillBar,
  Socials,
  type GalleryState,
} from '../components/ui'
import { MiniDash, Radar, Sparkline } from '../components/charts'
import {
  codeSamples,
  education,
  experience,
  impact,
  profile,
  projects,
  skillGroups,
  softSkills,
} from '../data/content'
import { scrollToId, useActiveSection } from '../hooks'
import '../analyst.css'
import '../analyst2.css'

const nav: [string, string][] = [
  ['home', 'Overview'],
  ['about', 'About'],
  ['process', 'Process'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['certifications', 'Certificates'],
  ['contact', 'Contact'],
]
const ids = nav.map(([id]) => id)

const trends = [
  [20, 24, 23, 31, 36, 44],
  [30, 28, 35, 38, 45, 52],
  [60, 52, 50, 41, 38, 30],
  [1, 2, 3, 4, 5, 6],
]

const pipeline = [
  { step: 'Extract', tools: 'SQL · MySQL · Excel', text: 'Pull raw data from databases and spreadsheets.' },
  { step: 'Clean', tools: 'Power Query · Pandas', text: 'Fix nulls, duplicates and formats.' },
  { step: 'Model', tools: 'DAX · Data Modeling', text: 'Build relationships and KPI measures.' },
  { step: 'Visualize', tools: 'Power BI · Excel', text: 'Design interactive dashboards.' },
  { step: 'Insight', tools: 'Trends · Forecasting', text: 'Turn numbers into decisions.' },
]

const radarData = [
  { name: 'Power BI', level: 90 },
  { name: 'Excel', level: 92 },
  { name: 'SQL', level: 85 },
  { name: 'Power Query', level: 88 },
  { name: 'DAX', level: 82 },
  { name: 'Python', level: 78 },
  { name: 'Data Cleaning', level: 90 },
  { name: 'KPI Design', level: 90 },
]

const slicers = ['All', 'Power BI', 'DAX', 'Power Query', 'Excel', 'SQL', 'Python', 'Data Visualization']

export default function AnalystSite() {
  const active = useActiveSection(ids)
  const [gallery, setGallery] = useState<GalleryState>(null)
  const [slicer, setSlicer] = useState('All')
  const [codeId, setCodeId] = useState(codeSamples[0].id)
  const [sent, setSent] = useState(false)

  const shown = projects.filter(
    (p) => slicer === 'All' || p.tools.some((t) => t === slicer || (slicer === 'SQL' && /sql/i.test(t))),
  )
  const activeCode = codeSamples.find((c) => c.id === codeId) || codeSamples[0]

  // Opens the visitor's email app with the message filled in.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get('subject')))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="site analyst">
      <nav className="a-nav">
        <a href="#/" className="a-brand"><span>SS</span> Sandeep Semwal</a>
        <ul>
          {nav.map(([id, label]) => (
            <li key={id}><button className={active === id ? 'on' : ''} onClick={() => scrollToId(id)}>{label}</button></li>
          ))}
        </ul>
        <a className="a-switch" href="#/vibecoder">
          <span className="sw-dot" aria-hidden>🤖</span>
          <span>Switch to Vibe Coder</span>
          <span className="sw-arrow" aria-hidden>→</span>
        </a>
      </nav>

      <section id="home" className="a-hero">
        <div className="a-hero-text">
          <span className="a-pill">{profile.role}</span>
          <h1>Turning Data <br />into <em>Insights</em></h1>
          <p className="a-lead">{profile.tagline}</p>
          <div className="a-tools">
            {profile.chips.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="a-cta">
            <button className="a-btn primary" onClick={() => scrollToId('projects')}>Explore projects</button>
            <a className="a-btn" href="./Sandeep_Semwal_Resume.pdf" download>Download resume</a>
          </div>
          <Socials />
        </div>
        <div className="a-hero-img">
          <img src="./banners/data-analyst.webp" alt="Sandeep Semwal at his desk, Data Analytics Portfolio" />
          <MiniDash />
        </div>
      </section>

      <div className="a-kpis">
        {impact.map((i, k) => (
          <div key={i.label} className="a-kpi">
            <span className="a-kpi-label">{i.label}</span>
            <strong><Counter value={i.value} suffix={i.suffix} /></strong>
            <em className="up">{k === 2 ? '▼ faster' : k === 3 ? '▲ delivered' : '▲ improvement'}</em>
            {i.detail && <p className="a-kpi-detail">{i.detail}</p>}
            <Sparkline points={trends[k]} color={k === 2 ? '#f59e0b' : '#1d6fe0'} />
          </div>
        ))}
      </div>

      <section id="about">
        <SectionTitle eyebrow="About" title="Who I am" />
        <div className="a-about">
          <img src="./profile.webp" alt={profile.name} />
          <div>
            <p>{profile.summary}</p>
            <dl>
              <div><dt>Location</dt><dd>{profile.location}</dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
              <div><dt>Languages</dt><dd>{profile.languages.join(', ')}</dd></div>
              <div><dt>Currently</dt><dd>Prototype Developer, SvisionTek Consultancy Services</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="process">
        <SectionTitle eyebrow="Process" title="From raw data to insight" />
        <div className="a-pipe">
          {pipeline.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="a-pipe-step">
              <span className="a-pipe-n">{i + 1}</span>
              <h3>{p.step}</h3>
              <b>{p.tools}</b>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="a-sql">
          <div className="a-sql-bar">
            <i /><i /><i />
            <div className="a-sql-tabs" role="tablist" aria-label="Analytical code samples">
              {codeSamples.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={c.id === activeCode.id}
                  className={c.id === activeCode.id ? 'on' : ''}
                  onClick={() => setCodeId(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <span className="a-sql-file">{activeCode.filename}</span>
          </div>
          <pre>{activeCode.code}</pre>
        </Reveal>
      </section>

      <section id="skills">
        <SectionTitle eyebrow="Toolkit" title="Technical Skills" />
        <Reveal className="a-card a-radar-card">
          <div>
            <h3>Skill radar</h3>
            <p className="a-muted">Core BI, database, and programming stack used across enterprise reporting and Python analytics projects.</p>
          </div>
          <Radar data={radarData} />
        </Reveal>
        <div className="a-skills">
          {skillGroups.map((g) => (
            <Reveal key={g.title} className="a-card">
              <h3>{g.title}</h3>
              {g.items.map((s) => <SkillBar key={s.name} {...s} />)}
            </Reveal>
          ))}
        </div>
        <Reveal className="a-card a-soft">
          <h3>Soft skills</h3>
          <div className="a-tags">{softSkills.map((t) => <span key={t}>{t}</span>)}</div>
        </Reveal>
      </section>

      <section id="experience">
        <SectionTitle eyebrow="Career" title="Professional Experience" />
        <ol className="a-timeline">
          {experience.map((e) => (
            <Reveal key={e.title} className="a-tl-item">
              <div className="a-dot" />
              <div className="a-card">
                <div className="a-tl-head"><h3>{e.title}</h3><span>{e.period}</span></div>
                <p className="a-muted a-company"><CompanyLogo />{e.company} · {e.location}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className="exp-tools">
                  {e.tools.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="projects">
        <SectionTitle eyebrow="Work" title="Dashboards & Analytics Projects" />
        <div className="a-slicer" role="group" aria-label="Filter projects by tool">
          <span>Slicer · Tool</span>
          {slicers.map((t) => (
            <button key={t} className={slicer === t ? 'on' : ''} onClick={() => setSlicer(t)}>{t}</button>
          ))}
          <em className="a-slicer-count">Showing {shown.length} of {projects.length}</em>
        </div>
        <div className="a-projects">
          {shown.map((p, idx) => (
            <ProjectCard
              key={p.title}
              project={p}
              theme="analyst"
              delay={(idx % 2) * 0.06}
              onOpenGallery={(images, index, title) => setGallery({ images, index, title })}
            />
          ))}
        </div>
      </section>

      <section id="github">
        <SectionTitle eyebrow="Code" title="GitHub repositories" />
        <GithubRepos />
      </section>

      <section id="education">
        <SectionTitle eyebrow="Learning" title="Education" />
        <div className="a-edu">
          <table className="a-table">
            <thead><tr><th>Qualification</th><th>Institution</th><th>Completed</th></tr></thead>
            <tbody>
              {education.map((e) => <tr key={e.title}><td>{e.title}</td><td>{e.place}</td><td>{e.year}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section id="certifications">
        <SectionTitle eyebrow="Credentials" title="Certifications & Training" />
        <Certificates />
      </section>

      <section id="contact">
        <SectionTitle eyebrow="Contact" title="Let's work together" />
        <div className="a-contact">
          <div className="a-card a-links">
            <a href={`mailto:${profile.email}`}><b>Email</b>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><b>LinkedIn</b>sandeep-semwal</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><b>GitHub</b>Sandeepsem</a>
            <span><b>Location</b>{profile.location}</span>
          </div>
          <form className="a-card" onSubmit={submit}>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <input name="subject" placeholder="Subject" required />
            <textarea name="message" rows={4} placeholder="How can I help?" required />
            <button className="a-btn primary" type="submit">Send message</button>
            {sent && <p className="a-muted">Opening your email app…</p>}
          </form>
        </div>
      </section>

      <section id="next-horizon">
        <SectionTitle eyebrow="What's Next · In Progress" title="Agentic AI & n8n Automated Workflows" />
        <NextHorizon />
      </section>

      <footer><Socials />© {new Date().getFullYear()} {profile.name} · <a href="#/">Back to start</a></footer>

      <LightboxGallery
        gallery={gallery}
        onClose={() => setGallery(null)}
        onSelect={(index) => setGallery((g) => (g ? { ...g, index } : null))}
      />
    </div>
  )
}
