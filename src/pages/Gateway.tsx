import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useSpeech } from '../hooks'

export default function Gateway() {
  const { speak, stop, speaking, supported } = useSpeech(profile.welcome)

  // Browsers block sound until the visitor interacts, so the first click/tap/key plays the welcome once.
  useEffect(() => {
    if (!supported) return
    const events = ['pointerdown', 'keydown']
    const go = () => {
      speak()
      events.forEach((e) => window.removeEventListener(e, go))
    }
    events.forEach((e) => window.addEventListener(e, go))
    return () => events.forEach((e) => window.removeEventListener(e, go))
  }, [supported, speak])

  return (
    <div className="gateway">
      <header className="gw-head">
        <motion.div className={`gw-photo${speaking ? ' speaking' : ''}`} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <img src="./profile.webp" alt={profile.name} />
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
          <p className="gw-hi">Welcome to the portfolio of</p>
          <h1>{profile.name}</h1>
          <p className="gw-sub">{profile.role} · {profile.location}</p>
          {speaking && (
            <div className="gw-wave" aria-hidden>
              {Array.from({ length: 7 }, (_, i) => <span key={i} style={{ animationDelay: `${i * 0.11}s` }} />)}
            </div>
          )}
        </motion.div>
      </header>

      <div className="gw-doors">
        <motion.a href="#/analyst" className="door door-analyst" whileHover={{ y: -6 }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
          <img src="./banners/data-analyst.webp" alt="Data Analytics Portfolio: Turning Data into Insights" />
          <div className="door-body">
            <span className="door-tag">Portfolio 1 · Business Intelligence</span>
            <h2>Data Analyst</h2>
            <p>Interactive Power BI dashboards, SQL/MySQL ETL pipelines, Excel MIS reporting, and Python analytics systems.</p>
            <ul className="door-highlights">
              <li>Power BI &amp; DAX</li>
              <li>SQL &amp; Power Query</li>
              <li>Real Project Galleries</li>
              <li>+15% Forecast Accuracy</li>
            </ul>
            <span className="door-go">Enter Data Analyst Portfolio →</span>
          </div>
        </motion.a>

        <motion.a href="#/vibecoder" className="door door-vibe" whileHover={{ y: -6 }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
          <img src="./banners/vibecoder-agentic-ai.webp" alt="Prototype Developer and Agentic AI" />
          <div className="door-body">
            <span className="door-tag">Portfolio 2 · AI Engineering</span>
            <h2>Vibe Coder <span className="plus">+ Agentic AI</span></h2>
            <p>AI-assisted data analytics, rapid MVPs &amp; CRM web apps, Python automation tools, and agentic AI workflows.</p>
            <ul className="door-highlights">
              <li>AI-Powered Live CRM</li>
              <li>Agentic AI Pipelines</li>
              <li>Python Automation</li>
              <li>ChatGPT / Gemini / Claude</li>
            </ul>
            <span className="door-go">Enter Vibe Coder Portfolio →</span>
          </div>
        </motion.a>
      </div>

      <div className="gw-actions">
        <a className="gw-pill primary" href="./Sandeep_Semwal_Resume.pdf" download>
          📄 Download Resume PDF
        </a>
        <a className="gw-pill" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a className="gw-pill" href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        {supported && (
          <button className="gw-sound" onClick={speaking ? stop : speak}>
            {speaking ? '■ Stop voice' : '🔊 Play welcome'}
          </button>
        )}
      </div>
    </div>
  )
}
