'use client'
import { useEffect, useRef } from 'react'
import styles from './CinemaHero.module.css'

export default function CinemaHero() {
  const canvasRef = useRef(null)
  const uiRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    const ui = uiRef.current
    const ctx = cv.getContext('2d')
    let T = 0
    let animId
    let wordTimeout

    function rsz() {
      cv.width = cv.offsetWidth
      cv.height = cv.offsetHeight
    }
    rsz()
    window.addEventListener('resize', rsz)

    const W = () => cv.width
    const H = () => cv.height

    const speedLines = Array.from({ length: 60 }, () => ({
      y: (Math.random() - 0.5) * 2,
      speed: 0.008 + Math.random() * 0.025,
      len: 0.08 + Math.random() * 0.22,
      alpha: 0.15 + Math.random() * 0.5,
      side: Math.random() > 0.5 ? 1 : -1,
      x: Math.random(),
      hue: 270 + Math.random() * 50,
    }))

    const RAY_COUNT = 28
    const rays = Array.from({ length: RAY_COUNT }, (_, i) => ({
      angle: (i / RAY_COUNT) * Math.PI * 2,
      len: 0.3 + Math.random() * 0.5,
      alpha: 0.06 + Math.random() * 0.12,
      width: 0.5 + Math.random() * 1.5,
      hue: 265 + Math.random() * 40,
      pulse: Math.random() * Math.PI * 2,
    }))

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.06, vy: (Math.random() - 0.5) * 0.06,
      r: 0.5 + Math.random() * 1.8,
      h: 260 + Math.random() * 80, a: 0.2 + Math.random() * 0.5,
      t: Math.random() * Math.PI * 2,
    }))

    function drawBg() {
      const w = W(), h = H(), cx = w / 2, cy = h / 2
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h)
      const orb = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45)
      orb.addColorStop(0, 'rgba(120,40,200,0.55)')
      orb.addColorStop(0.2, 'rgba(90,20,160,0.35)')
      orb.addColorStop(0.5, 'rgba(60,10,120,0.18)')
      orb.addColorStop(1, 'transparent')
      ctx.fillStyle = orb; ctx.fillRect(0, 0, w, h)
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.08)
      core.addColorStop(0, 'rgba(200,140,255,0.6)')
      core.addColorStop(0.4, 'rgba(138,92,246,0.3)')
      core.addColorStop(1, 'transparent')
      ctx.fillStyle = core; ctx.fillRect(0, 0, w, h)
      rays.forEach(r => {
        const pulse = 0.7 + Math.sin(T * 0.8 + r.pulse) * 0.3
        const len = r.len * Math.max(w, h) * pulse
        const ex = cx + Math.cos(r.angle) * len
        const ey = cy + Math.sin(r.angle) * len
        const rg = ctx.createLinearGradient(cx, cy, ex, ey)
        rg.addColorStop(0, `hsla(${r.hue},80%,65%,${r.alpha * pulse * 1.5})`)
        rg.addColorStop(0.3, `hsla(${r.hue},70%,55%,${r.alpha * pulse})`)
        rg.addColorStop(1, 'transparent')
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey)
        ctx.strokeStyle = rg; ctx.lineWidth = r.width; ctx.stroke()
      })
      speedLines.forEach(l => {
        l.x += l.speed; if (l.x > 1) l.x = 0
        const y = cy + l.y * h * 0.5
        const startX = l.side === 1 ? cx + l.x * (w * 0.5) : cx - l.x * (w * 0.5)
        const endX = l.side === 1 ? startX + l.len * w * 0.5 : startX - l.len * w * 0.5
        const lg = ctx.createLinearGradient(startX, y, endX, y)
        lg.addColorStop(0, 'transparent')
        lg.addColorStop(0.3, `hsla(${l.hue},70%,65%,${l.alpha})`)
        lg.addColorStop(0.7, `hsla(${l.hue + 20},80%,70%,${l.alpha * 0.7})`)
        lg.addColorStop(1, 'transparent')
        ctx.fillStyle = lg
        ctx.fillRect(Math.min(startX, endX), y - 0.8, Math.abs(endX - startX), 1.6)
      })
      pts.forEach(p => {
        p.t += 0.02; p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > 100) p.vx *= -1
        if (p.y < 0 || p.y > 100) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x / 100 * w, p.y / 100 * h, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.h},70%,65%,${p.a * (0.5 + Math.sin(p.t) * 0.5)})`
        ctx.fill()
      })
      const vig = ctx.createRadialGradient(cx, cy, h * 0.1, cx, cy, w * 0.8)
      vig.addColorStop(0, 'transparent'); vig.addColorStop(1, 'rgba(0,0,0,0.82)')
      ctx.fillStyle = vig; ctx.fillRect(0, 0, w, h)
      const bot = ctx.createLinearGradient(0, h * 0.7, 0, h)
      bot.addColorStop(0, 'transparent'); bot.addColorStop(1, 'rgba(0,0,0,0.6)')
      ctx.fillStyle = bot; ctx.fillRect(0, 0, w, h)
    }

    const sequences = [
      { text: 'Color Grade', size: 'clamp(32px,7vw,72px)', x: 6, y: 40, color: '#fff', accent: '#c4b5fd', from: 'left', dur: 1800, sub: 'AI · Cinematic' },
      { text: 'Speed Ramp ⚡', size: 'clamp(28px,6vw,62px)', x: 6, y: 40, color: '#e040fb', accent: '#f0abfc', from: 'right', dur: 1800, sub: '0.3x · 1x · 3x' },
      { text: 'Auto Captions', size: 'clamp(28px,5.5vw,60px)', x: 6, y: 40, color: '#22d3ee', accent: '#a5f3fc', from: 'left', dur: 1800, sub: 'Hindi · Tamil · Telugu' },
      { text: 'Trim. ✂', size: 'clamp(36px,8vw,80px)', x: 6, y: 40, color: '#fff', accent: '#c4b5fd', from: 'bottom', dur: 1800, sub: 'Cut the noise' },
      { text: 'Background Remover', size: 'clamp(24px,4.5vw,52px)', x: 6, y: 40, color: '#a78bfa', accent: '#c4b5fd', from: 'left', dur: 1800, sub: 'No green screen' },
      { text: 'Export.', size: 'clamp(36px,8vw,78px)', x: 6, y: 40, color: '#fff', accent: '#c4b5fd', from: 'right', dur: 1800, sub: '📤 Reels · Shorts · HD' },
      { text: 'CutEdit.', size: 'clamp(36px,9vw,90px)', x: 50, y: 50, color: '#8a5cf6', accent: '#c4b5fd', from: 'scale', dur: 2400, sub: 'Your AI Video Editor', center: true },
    ]

    let seqIdx = 0

    function spawnWord(seq) {
      const el = document.createElement('div')
      el.style.cssText = `position:absolute;font-family:'Syne',sans-serif;font-weight:800;white-space:nowrap;line-height:1;letter-spacing:-0.02em;font-size:${seq.size};color:${seq.color};text-shadow:0 0 60px ${seq.accent}aa,0 0 120px ${seq.accent}44;opacity:0;transition:all 0.6s cubic-bezier(0.15,0,0.2,1);`
      if (seq.center) {
        el.style.left = '50%'; el.style.top = '50%'
        el.style.transform = 'translate(-50%,-50%) scale(0.4)'
        el.style.textAlign = 'center'
      } else {
        el.style.left = seq.x + '%'; el.style.top = seq.y + '%'
        if (seq.from === 'left') el.style.transform = 'translateY(-50%) translateX(-120px)'
        else if (seq.from === 'right') el.style.transform = 'translateY(-50%) translateX(120px)'
        else el.style.transform = 'translateY(40px)'
      }
      el.textContent = seq.text
      ui.appendChild(el)

      setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.opacity = '1'
          if (seq.center) el.style.transform = 'translate(-50%,-50%) scale(1)'
          else if (seq.from === 'bottom') el.style.transform = 'translateY(-50%)'
          else el.style.transform = 'translateY(-50%) translateX(0)'
        }))
      }, 30)

      let subEl = null
      if (seq.sub) {
        subEl = document.createElement('div')
        subEl.style.cssText = `position:absolute;font-family:'DM Sans',sans-serif;font-size:clamp(9px,1.3vw,13px);font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#8b8aaa;opacity:0;transition:opacity 0.5s;white-space:nowrap;`
        if (seq.center) {
          subEl.style.left = '50%'; subEl.style.top = 'calc(50% + clamp(44px,7vw,80px))'
          subEl.style.transform = 'translateX(-50%)'
        } else {
          subEl.style.left = seq.x + '%'; subEl.style.top = (seq.y + 16) + '%'
        }
        subEl.textContent = seq.sub
        ui.appendChild(subEl)
        setTimeout(() => { subEl.style.opacity = '1' }, 500)
      }

      setTimeout(() => {
        el.style.opacity = '0'
        if (seq.center) el.style.transform = 'translate(-50%,-50%) scale(1.08)'
        if (subEl) subEl.style.opacity = '0'
        setTimeout(() => { el.remove(); if (subEl) subEl.remove() }, 350)
      }, seq.dur - 350)
    }

    function wordLoop() {
      spawnWord(sequences[seqIdx])
      wordTimeout = setTimeout(() => {
        seqIdx = (seqIdx + 1) % sequences.length
        wordLoop()
      }, sequences[seqIdx].dur)
    }

    function bgLoop() {
      animId = requestAnimationFrame(bgLoop)
      T += 0.01
      drawBg()
    }

    bgLoop()
    wordLoop()

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(wordTimeout)
      window.removeEventListener('resize', rsz)
      if (ui) ui.innerHTML = ''
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div ref={uiRef} className={styles.ui} />
    </div>
  )
}
