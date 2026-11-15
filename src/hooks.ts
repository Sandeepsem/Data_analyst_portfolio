import { useCallback, useEffect, useRef, useState } from 'react'

export function useSpeech(text: string) {
  const [speaking, setSpeaking] = useState(false)
  const [supported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!supported) return
    const pick = () => {
      const voices = window.speechSynthesis.getVoices()
      const isFemale = (v: SpeechSynthesisVoice) =>
        /female|woman|girl|neerja|heera|zira|hazel|susan|catherine|jenny|aria|sonia|veena|aditi|swara|kalpana/i.test(v.name)
      const isMale = (v: SpeechSynthesisVoice) =>
        /male|man|boy|prabhat|ravi|madhav|hemant|david|mark|guy|george|james|andrew|brian|richard|ryan|eric|steffan/i.test(v.name)

      voiceRef.current =
        // 1. Male Indian English voices (Microsoft Prabhat, Ravi, Madhav, etc.)
        voices.find((v) => /en[-_]IN/i.test(v.lang) && isMale(v)) ||
        // 2. Any Indian English voice that is not explicitly female
        voices.find((v) => /en[-_]IN/i.test(v.lang) && !isFemale(v)) ||
        // 3. Indian locale male voice (e.g. Hindi/Indian male)
        voices.find((v) => /[-_]IN/i.test(v.lang) && isMale(v)) ||
        // 4. Any English natural/online male voice
        voices.find((v) => /^en/i.test(v.lang) && /natural|online/i.test(v.name) && isMale(v)) ||
        // 5. Any English male voice
        voices.find((v) => /^en/i.test(v.lang) && isMale(v)) ||
        // 6. Any English voice that is not female
        voices.find((v) => /^en/i.test(v.lang) && !isFemale(v)) ||
        null
    }
    pick()
    window.speechSynthesis.addEventListener('voiceschanged', pick)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pick)
      window.speechSynthesis.cancel()
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [supported])

  const stop = useCallback(() => {
    if (!supported) return
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  const speak = useCallback(() => {
    if (!supported) return
    stop()
    const u = new SpeechSynthesisUtterance(text)
    if (voiceRef.current) {
      u.voice = voiceRef.current
      u.lang = voiceRef.current.lang
    } else {
      u.lang = 'en-IN'
    }
    u.rate = 0.95
    u.pitch = 0.92

    u.onstart = () => {
      setSpeaking(true)
      // Keep-alive workaround for long utterances in Chromium browsers
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          if (timerRef.current) window.clearInterval(timerRef.current)
        } else {
          window.speechSynthesis.pause()
          window.speechSynthesis.resume()
        }
      }, 7000)
    }

    const end = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
      setSpeaking(false)
    }

    u.onend = end
    u.onerror = end
    window.speechSynthesis.speak(u)
  }, [supported, text, stop])

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
