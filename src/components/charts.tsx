import { motion } from 'framer-motion'

/** Small trend line for KPI cards. */
export function Sparkline({ points, color = '#1d6fe0' }: { points: number[]; color?: string }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const w = 120
  const h = 36
  const xy = points.map((p, i) => [(i / (points.length - 1)) * w, h - 4 - ((p - min) / (max - min || 1)) * (h - 8)])
  const line = xy.map(([x, y]) => `${x},${y}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="spark" aria-hidden>
      <defs>
        <linearGradient id={`g${color.slice(1)}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${line} ${w},${h}`} fill={`url(#g${color.slice(1)})`} />
      <motion.polyline
        points={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
    </svg>
  )
}

/** Radar chart of core skills. */
export function Radar({ data }: { data: { name: string; level: number }[] }) {
  const size = 320
  const c = size / 2
  const r = 108
  const n = data.length
  const pt = (i: number, v: number): [number, number] => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2
    return [c + Math.cos(a) * r * v, c + Math.sin(a) * r * v]
  }
  const ring = (v: number) => data.map((_, i) => pt(i, v).join(',')).join(' ')
  const shape = data.map((d, i) => pt(i, d.level / 100).join(',')).join(' ')
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="radar" role="img" aria-label="Skill radar chart">
      {[0.25, 0.5, 0.75, 1].map((v) => <polygon key={v} points={ring(v)} className="radar-ring" />)}
      {data.map((_, i) => {
        const [x, y] = pt(i, 1)
        return <line key={i} x1={c} y1={c} x2={x} y2={y} className="radar-axis" />
      })}
      <motion.polygon
        points={shape}
        className="radar-shape"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: `${c}px ${c}px` }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      {data.map((d, i) => {
        const [x, y] = pt(i, d.level / 100)
        const [lx, ly] = pt(i, 1.2)
        return (
          <g key={d.name}>
            <circle cx={x} cy={y} r="4" className="radar-dot" />
            <text x={lx} y={ly} textAnchor={lx < c - 4 ? 'end' : lx > c + 4 ? 'start' : 'middle'} dominantBaseline="middle" className="radar-label">{d.name}</text>
          </g>
        )
      })}
    </svg>
  )
}

/** Animated mini dashboard shown over the hero image. */
export function MiniDash() {
  const bars = [38, 52, 44, 66, 58, 78, 70, 92]
  return (
    <div className="minidash" aria-hidden>
      <div className="md-head"><span /><span /><span /><em>Sales · live</em></div>
      <div className="md-body">
        <div className="md-bars">
          {bars.map((b, i) => <i key={i} style={{ height: `${b}%`, animationDelay: `${i * 0.08}s` }} />)}
        </div>
        <svg viewBox="0 0 42 42" className="md-donut">
          <circle cx="21" cy="21" r="15.9" className="md-track" />
          <circle cx="21" cy="21" r="15.9" className="md-arc" strokeDasharray="72 100" />
          <text x="21" y="23.5" textAnchor="middle">72%</text>
        </svg>
      </div>
    </div>
  )
}
