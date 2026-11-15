import { useCallback, useEffect, useRef, useState } from 'react'

export function useSpeech(text: string) {
  const [speaking, setSpeaking] = useState(false)
  const [supported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    if (!supported) return
    const pick = () => {
      const voices = window.speechSynthesis.getVoices()
      voiceRef.current =
        voices.find((v) => /en-IN/i.test(v.lang) && /male|ravi|prabhat/i.test(v.name)) ||
        voices.find((v) => /en-IN/i.test(v.lang)) ||
        voices.find((v) => /^en/i.test(v.lang) && /male|david|mark|guy/i.test(v.name)) ||
        voices.find((v) => /^en/i.test(v.lang)) ||
        null
    }
    pick()
    window.speechSynthesis.addEventListener('voiceschanged', pick)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pick)
      window.speechSynthesis.cancel()
    }
  }, [supported])

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  const speak = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    if (voiceRef.current) u.voice = voiceRef.current
    u.rate = 0.95
    u.pitch = 0.9
    u.onstart = () => setSpeaking(true)
    const end = () => setSpeaking(false)
    u.onend = end
    u.onerror = end
    window.speechSynthesis.speak(u)
  }, [supported, text])

  return { speak, stop, speaking, supported }
}

/** Returns the id of the section currently in view, for the nav highlight. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

export type Route = 'gateway' | 'analyst' | 'vibecoder'

const parse = (): Route => {
  const h = window.location.hash
  return h.startsWith('#/analyst') ? 'analyst' : h.startsWith('#/vibecoder') ? 'vibecoder' : 'gateway'
}

/** Hash routing (#/analyst, #/vibecoder) so it works on any static host, including GitHub Pages. */
export function useRoute() {
  const [route, setRoute] = useState<Route>(parse)
  useEffect(() => {
    const on = () => {
      setRoute(parse())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

/** In-page navigation without touching the hash route. */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
