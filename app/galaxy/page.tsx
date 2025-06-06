'use client' // Only for App Router (remove for Pages Router)

import { useEffect, useRef } from 'react'

export default function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle {
      x: number
      y: number
      radius: number
      speed: number
      angle: number

      constructor(x: number, y: number, radius: number, speed: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.speed = speed
        this.angle = Math.random() * Math.PI * 2
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        if (this.x < 0 || this.x > canvas.width)
          this.angle = Math.PI - this.angle
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    const numParticles = 100

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 4 + 1,
          Math.random() * 0.5 + 0.2
        )
      )
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(
            particles[a].x - particles[b].x,
            particles[a].y - particles[b].y
          )
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="h-screen w-screen overflow-hidden bg-[radial-gradient(circle,_#1b2735,_#090a0f)]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  )
}
