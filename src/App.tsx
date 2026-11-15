import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRoute, type Route } from './hooks'
import Gateway from './pages/Gateway'
import AnalystSite from './pages/AnalystSite'
import VibeSite from './pages/VibeSite'

type PortalTarget = 'analyst' | 'vibecoder' | null

function PortalOverlay({ to }: { to: Exclude<PortalTarget, null> }) {
  const isVibe = to === 'vibecoder'
  return (
    <motion.div
      key={`portal-${to}`}
      className={`portal-overlay ${isVibe ? 'to-vibe' : 'to-analyst'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="portal-sweep" />
      <motion.div
        className="portal-card"
        initial={{ opacity: 0, scale: 0.9, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -12 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portal-icon-row">
          <span className="portal-badge">{isVibe ? '🤖' : '📊'}</span>
          <div className="portal-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="portal-route-pill">
          <span>{isVibe ? '📊 Data Analyst & BI' : '🤖 Vibe Coder + Agentic AI'}</span>
          <span className="portal-route-arrow">→</span>
          <span>{isVibe ? '🤖 Vibe Coder + Agentic AI' : '📊 Data Analyst & BI'}</span>
        </div>
        <span className="portal-kicker">
          {isVibe ? '<SS/> · SWITCHING MODE' : 'BI WORKSPACE · SWITCHING MODE'}
        </span>
        <h2>
          {isVibe
            ? 'Entering Vibe Coder + Agentic AI'
            : 'Entering Data Analyst & Power BI Portfolio'}
        </h2>
        <motion.blockquote
          className="portal-phrase"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {isVibe
            ? '“From deep data insights to autonomous AI execution — turning analytics into live, self-driving web & mobile products.”'
            : '“Behind every intelligent product is rigorous data — transforming raw numbers into executive Power BI dashboards & strategic clarity.”'}
        </motion.blockquote>
        <p className="portal-status">
          {isVibe
            ? '> Activating Agentic AI · n8n Workflows · React · Supabase · Firebase · Docker CI/CD...'
            : '> Activating Power BI · DAX Modeling · SQL / MySQL ETL · Python Analytics...'}
        </p>
        <div className="portal-bar">
          <div className="portal-bar-fill" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const route = useRoute()
  const prevRouteRef = useRef<Route>(route)
  const [activePortal, setActivePortal] = useState<PortalTarget>(null)

  useEffect(() => {
    const prev = prevRouteRef.current
    if (prev !== route) {
      prevRouteRef.current = route
      if (route === 'vibecoder' || route === 'analyst') {
        setActivePortal(route)
        const timer = window.setTimeout(() => setActivePortal(null), 3000)
        return () => window.clearTimeout(timer)
      }
      setActivePortal(null)
    }
  }, [route])

  const dir = route === 'vibecoder' ? 1 : route === 'analyst' ? -1 : 0

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          className="route-stage"
          initial={{ opacity: 0, x: dir * 24, y: 18, scale: 0.985, filter: 'blur(6px)' }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: dir * -24, y: -18, scale: 0.985, filter: 'blur(6px)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {route === 'analyst' ? <AnalystSite /> : route === 'vibecoder' ? <VibeSite /> : <Gateway />}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {activePortal && <PortalOverlay to={activePortal} />}
      </AnimatePresence>
    </>
  )
}
