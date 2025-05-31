'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const slides = [
  {
    title: 'Nike React',
    subtitle: "Rewriting sport's playbook for billions of athletes",
    image:
      'https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop'
  },
  {
    title: 'CoolApps',
    subtitle: 'From mobile apps to gaming consoles',
    image:
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop'
  },
  {
    title: 'Grumpy',
    subtitle: 'Bringing Art to everything',
    image:
      'https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop'
  }
]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative">
        <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 h-[30rem] md:h-[calc(100vh-106px)] bg-cover bg-center bg-no-repeat flex flex-col"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">{slide.title}</span>
                  <span className="block text-white text-xl md:text-3xl">
                    {slide.subtitle}
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black hover:bg-gray-100"
                      href="#"
                    >
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="sr-only">Previous</span>
        </button>

        <button
          onClick={handleNext}
          className="absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl"
        >
          <ChevronRight className="w-5 h-5" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}
