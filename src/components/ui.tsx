import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import { certifications, featuredRepos, learningFocus, profile, type Project, type ProjectImage } from '../data/content'
import '../certs.css'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </Reveal>
  )
}

export function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="skill">
      <div className="skill-head">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="bar">
        <motion.div
          className="bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const GH = 'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z'
const LI = 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z'

export function Socials() {
  return (
    <div className="socials">
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden><path d={LI} /></svg>LinkedIn
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <svg viewBox="0 0 24 24" aria-hidden><path d={GH} /></svg>GitHub
      </a>
    </div>
  )
}

export type GalleryState = {
  title: string
  images: ProjectImage[]
  index: number
} | null

export function LightboxGallery({
  gallery,
  onClose,
  onSelect,
}: {
  gallery: GalleryState
  onClose: () => void
  onSelect: (index: number) => void
}) {
  useEffect(() => {
    if (!gallery) return
    const total = gallery.images.length
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && total > 1) onSelect((gallery.index + 1) % total)
      else if (e.key === 'ArrowLeft' && total > 1) onSelect((gallery.index - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [gallery, onClose, onSelect])

  if (!gallery || gallery.images.length === 0) return null
  const total = gallery.images.length
  const safeIndex = Math.min(Math.max(gallery.index, 0), total - 1)
  const current = gallery.images[safeIndex]

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${gallery.title} gallery`}>
      <div className="lb-shell" onClick={(e) => e.stopPropagation()}>
        <div className="lb-head">
          <div>
            <strong>{gallery.title}</strong>
            {total > 1 && <span className="lb-count">{safeIndex + 1} / {total}</span>}
          </div>
          <button type="button" className="lb-close" onClick={onClose} aria-label="Close gallery">✕</button>
        </div>

        <div className="lb-stage">
          {total > 1 && (
            <button
              type="button"
              className="lb-nav lb-prev"
              onClick={() => onSelect((safeIndex - 1 + total) % total)}
              aria-label="Previous screenshot"
            >
              ‹
            </button>
          )}
          <img src={current.src} alt={current.caption || gallery.title} />
          {total > 1 && (
            <button
              type="button"
              className="lb-nav lb-next"
              onClick={() => onSelect((safeIndex + 1) % total)}
              aria-label="Next screenshot"
            >
              ›
            </button>
          )}
        </div>

        {current.caption && <p className="lb-caption">{current.caption}</p>}

        {total > 1 && (
          <div className="lb-thumbs" role="tablist" aria-label="Screenshot thumbnails">
            {gallery.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`lb-thumb${i === safeIndex ? ' on' : ''}`}
                onClick={() => onSelect(i)}
                aria-label={`View screenshot ${i + 1}: ${img.caption}`}
              >
                <img src={img.src} alt={img.caption} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectCard({
  project,
  theme,
  onOpenGallery,
  delay = 0,
}: {
  project: Project
  theme: 'analyst' | 'vibe'
  onOpenGallery: (images: ProjectImage[], index: number, title: string) => void
  delay?: number
}) {
  const slides: ProjectImage[] =
    project.images && project.images.length > 0
      ? project.images
      : [{ src: project.image, caption: project.title }]
  const [activeIdx, setActiveIdx] = useState(0)
  const safeIdx = Math.min(activeIdx, slides.length - 1)
  const activeSlide = slides[safeIdx]
  const isAnalyst = theme === 'analyst'

  return (
    <Reveal delay={delay} className={isAnalyst ? 'a-project' : 'v-project'}>
      <div className="proj-media">
        <button
          type="button"
          className="proj-img-btn"
          onClick={() => onOpenGallery(slides, safeIdx, project.title)}
          aria-label={`Inspect ${project.title} screenshots`}
        >
          <img src={activeSlide.src} alt={`${project.title} — ${activeSlide.caption}`} loading="lazy" />
          <span className="proj-badge">
            {slides.length > 1 ? `📸 ${slides.length} Screenshots` : '🔍 Inspect'}
          </span>
        </button>

        {slides.length > 1 && (
          <div className="proj-dots" role="tablist" aria-label={`${project.title} preview switcher`}>
            {slides.map((s, idx) => (
              <button
                key={s.src}
                type="button"
                className={idx === safeIdx ? 'on' : ''}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Preview ${idx + 1}: ${s.caption}`}
                title={s.caption}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="proj-body">
        <div className="proj-meta">
          <span className="proj-cat">{project.category}</span>
          <span className={isAnalyst ? 'a-muted' : 'v-mono'}>{project.duration}</span>
        </div>

        <h3>{project.title}</h3>
        {project.subtitle && <p className="proj-sub">{project.subtitle}</p>}

        {project.metrics && project.metrics.length > 0 && (
          <div className="proj-metrics">
            {project.metrics.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}

        <p className="proj-desc">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="proj-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className={isAnalyst ? 'a-tags' : 'v-tags'}>
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="proj-actions">
          <button
            type="button"
            className={isAnalyst ? 'a-btn sm' : 'v-btn sm'}
            onClick={() => onOpenGallery(slides, safeIdx, project.title)}
          >
            {slides.length > 1 ? `Inspect ${slides.length} Screens` : 'Inspect Screen'}
          </button>
          {project.links && project.links.length > 0 ? (
            project.links.map((lnk) => (
              <a
                key={lnk.url}
                className={isAnalyst ? `a-btn sm${lnk.primary ? ' primary' : ''}` : `v-btn sm${lnk.primary ? ' primary' : ''}`}
                href={lnk.url}
                target="_blank"
                rel="noreferrer"
              >
                {lnk.label}
              </a>
            ))
          ) : (
            project.live && (
              <a className={isAnalyst ? 'a-btn sm primary' : 'v-btn sm primary'} href={project.live} target="_blank" rel="noreferrer">
                Live App ↗
              </a>
            )
          )}
          {project.github && (
            <a className={isAnalyst ? 'a-btn sm' : 'v-btn sm'} href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

type CertFilter = 'All' | 'With Certificate' | 'Internship & Simulation' | 'Data & BI Courses' | 'Programming & IT'
const certFilters: CertFilter[] = ['All', 'With Certificate', 'Internship & Simulation', 'Data & BI Courses', 'Programming & IT']

export function Certificates() {
  const [gallery, setGallery] = useState<GalleryState>(null)
  const [filter, setFilter] = useState<CertFilter>('All')

  const allCertSlides: ProjectImage[] = certifications
    .filter((c) => Boolean(c.image))
    .map((c) => ({
      src: c.image!,
      caption: [c.title, c.issuer, c.date, c.credentialId].filter(Boolean).join(' · '),
    }))

  const openCertSlide = (imagePath: string) => {
    const index = Math.max(
      0,
      allCertSlides.findIndex((s) => s.src === imagePath),
    )
    setGallery({
      title: 'Verified Certificates & Credentials',
      images: allCertSlides,
      index,
    })
  }

  const shown = certifications.filter((c) => {
    if (filter === 'All') return true
    if (filter === 'With Certificate') return Boolean(c.image)
    return c.category === filter
  })

  return (
    <>
      <Reveal className="cert-toolbar">
        <div className="cert-filters" role="group" aria-label="Filter certificates by category">
          {certFilters.map((f) => (
            <button
              key={f}
              type="button"
              className={filter === f ? 'on' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        {allCertSlides.length > 0 && (
          <button
            type="button"
            className="cert-gallery-btn"
            onClick={() => openCertSlide(allCertSlides[0].src)}
          >
            🎓 View All {allCertSlides.length} Certificate Scans ↗
          </button>
        )}
      </Reveal>

      <div className="cert-grid">
        <AnimatePresence mode="popLayout">
          {shown.map((c, i) => (
            <motion.article
              key={c.title}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.24), ease: 'easeOut' }}
              className={`cert${c.featured ? ' cert-featured' : ''}${c.image ? ' has-img' : ''}`}
            >
              {c.image && (
                <button
                  type="button"
                  className="cert-media"
                  onClick={() => openCertSlide(c.image!)}
                  aria-label={`Inspect ${c.title} certificate scan`}
                >
                  <img src={c.image} alt={`${c.title} — ${c.issuer}`} loading="lazy" />
                  <span className="cert-verified-pill">✓ Verified Scan</span>
                  {c.grade && <span className="cert-grade-pill">{c.grade}</span>}
                  <span className="cert-media-hover">🔍 Click to inspect full certificate</span>
                </button>
              )}

              <div className="cert-body">
                <div className="cert-head">
                  <div className="cert-seal" aria-hidden>{c.icon}</div>
                  <div className="cert-badges">
                    <span className="cert-tag">{c.tag}</span>
                    {c.date && <span className="cert-date">{c.date}</span>}
                  </div>
                </div>

                <h3>{c.title}</h3>
                <p className="cert-issuer">{c.issuer}</p>

                {(c.credentialId || c.duration || c.grade) && (
                  <div className="cert-meta-row">
                    {c.credentialId && <span className="cert-id">{c.credentialId}</span>}
                    {c.duration && <span className="cert-meta-pill">⏱ {c.duration}</span>}
                    {c.grade && <span className="cert-meta-pill grade">🏅 {c.grade}</span>}
                  </div>
                )}

                {c.verifiedBy && <p className="cert-sign">✒️ {c.verifiedBy}</p>}
                {c.points && (
                  <ul className="cert-points">
                    {c.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
                {c.tools && (
                  <div className="cert-tools">
                    {c.tools.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}

                {c.image && (
                  <div className="cert-footer">
                    <button
                      type="button"
                      className="cert-view-btn"
                      onClick={() => openCertSlide(c.image!)}
                    >
                      🔍 View Full Certificate ↗
                    </button>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <LightboxGallery
        gallery={gallery}
        onClose={() => setGallery(null)}
        onSelect={(index) => setGallery((g) => (g ? { ...g, index } : null))}
      />
    </>
  )
}

type GithubApiRepo = {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  pushed_at: string
}

/** Curated GitHub repositories (strictly the 6 featured repos), enriched with live GitHub API metadata when available. */
export function GithubRepos() {
  const user = profile.github.split('/').pop()!
  const [liveByName, setLiveByName] = useState<Record<string, GithubApiRepo>>({})

  useEffect(() => {
    let live = true
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list: GithubApiRepo[]) => {
        if (!live) return
        const map: Record<string, GithubApiRepo> = {}
        for (const item of list) {
          map[item.name.toLowerCase()] = item
        }
        setLiveByName(map)
      })
      .catch(() => {})
    return () => {
      live = false
    }
  }, [user])

  return (
    <div className="gh-grid">
      {featuredRepos.map((repo, i) => {
        const remote = liveByName[repo.name.toLowerCase()]
        const url = remote?.html_url || repo.url
        const description = (remote?.description && remote.description.trim()) || repo.description
        const stars = remote?.stargazers_count ?? 0
        const updated = remote?.pushed_at
          ? new Date(remote.pushed_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
          : null

        return (
          <Reveal key={repo.name} delay={(i % 3) * 0.06}>
            <a className="gh-repo" href={url} target="_blank" rel="noreferrer">
              <h3>{repo.name}</h3>
              <p>{description}</p>
              <div className="gh-meta">
                <span>● {repo.language}</span>
                {remote && <span>★ {stars}</span>}
                <span>{updated ? `Updated ${updated}` : 'GitHub ↗'}</span>
              </div>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}

/** Company logo from ./logos/svisiontek.webp; falls back to an "SV" badge until the file is added. */
export function CompanyLogo() {
  const [ok, setOk] = useState(true)
  return ok ? (
    <img className="company-logo" src="./logos/svisiontek.webp" alt="SvisionTek logo" onError={() => setOk(false)} />
  ) : (
    <span className="company-logo fallback" aria-hidden>SV</span>
  )
}

/** End-of-portfolio showcase highlighting active upskilling in Agentic AI & n8n automated workflows. */
export function NextHorizon() {
  const [activeWf, setActiveWf] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const workflow = learningFocus.workflows[activeWf] || learningFocus.workflows[0]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((s) => (s + 1) % workflow.nodes.length)
    }, 1400)
    return () => window.clearInterval(timer)
  }, [workflow.nodes.length, activeWf])

  const selectWorkflow = (idx: number) => {
    setActiveWf(idx)
    setActiveStep(0)
  }

  return (
    <Reveal className="next-horizon">
      <div className="nh-top">
        <span className="nh-badge">
          <span className="nh-dot" aria-hidden />
          {learningFocus.badge}
        </span>
        <div className="nh-top-meta">
          <span className="nh-learner-pill">{learningFocus.statusPill}</span>
          <span className="nh-overall">{learningFocus.focusPill}</span>
        </div>
      </div>

      <div className="nh-header">
        <h3>{learningFocus.title}</h3>
        <p className="nh-sub">{learningFocus.subtitle}</p>
      </div>

      <blockquote className="nh-quote">{learningFocus.quote}</blockquote>
      <p className="nh-statement">{learningFocus.statement}</p>

      <div className="nh-canvas" aria-label="Interactive n8n and Agentic AI learning workflow simulator">
        <div className="nh-canvas-head">
          <div className="nh-win">
            <i />
            <i />
            <i />
            <span className="nh-filename">{workflow.file}</span>
          </div>
          <div className="nh-wf-tabs" role="tablist" aria-label="Choose automation workflow">
            {learningFocus.workflows.map((wf, idx) => (
              <button
                key={wf.id}
                type="button"
                role="tab"
                aria-selected={activeWf === idx}
                className={activeWf === idx ? 'on' : ''}
                onClick={() => selectWorkflow(idx)}
              >
                {wf.label}
              </button>
            ))}
            <button
              type="button"
              className="nh-sim-btn"
              onClick={() => setActiveStep(0)}
              title="Restart pipeline step animation"
            >
              ⚡ Simulate Flow
            </button>
          </div>
        </div>

        <div className="nh-flow" role="list" aria-label="Agentic AI and n8n automated workflow pipeline">
          {workflow.nodes.map((node, i) => {
            const isActive = activeStep === i
            return (
              <div key={node.step} role="listitem" className="nh-node-wrap">
                <motion.button
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`nh-node-card${isActive ? ' is-active' : ''}`}
                  animate={{ y: isActive ? -4 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="nh-node-top">
                    <span className="nh-step-tag">STEP {node.step}</span>
                    <span className="nh-node-icon" aria-hidden>{node.icon}</span>
                  </div>
                  <strong>{node.title}</strong>
                  <small>{node.sub}</small>
                </motion.button>
                {i < workflow.nodes.length - 1 && (
                  <span className={`nh-arrow${isActive ? ' is-active' : ''}`} aria-hidden>→</span>
                )}
              </div>
            )
          })}
        </div>

        <div className="nh-console" aria-live="polite">
          <span className="nh-console-dot" aria-hidden />
          <span className="nh-console-step">
            Running Node {workflow.nodes[activeStep]?.step}: {workflow.nodes[activeStep]?.title}
          </span>
          <span className="nh-console-log">{workflow.log}</span>
        </div>
      </div>

      <div className="nh-roadmap">
        <div className="nh-roadmap-head">
          <h4>📚 Active Learning Roadmap &amp; Focus Areas</h4>
          <span>Continuous Skill-Building Log</span>
        </div>
        <div className="nh-tracks">
          {learningFocus.tracks.map((track, i) => (
            <motion.div
              key={track.title}
              className="nh-track"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <div className="nh-track-top">
                <span className="nh-track-state">{track.state}</span>
                <strong className="nh-track-pct">{track.focus}</strong>
              </div>
              <h5>{track.title}</h5>
              <p>{track.topics}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="nh-pillars">
        {learningFocus.pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="nh-pillar"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <div className="nh-pillar-top">
              <span className="nh-pillar-icon" aria-hidden>{pillar.icon}</span>
              <span className="nh-mod-badge">{pillar.badge}</span>
            </div>
            <h4>{pillar.title}</h4>
            <p>{pillar.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="nh-goal">{learningFocus.goal}</div>

      <div className="nh-tags">
        {learningFocus.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Reveal>
  )
}
