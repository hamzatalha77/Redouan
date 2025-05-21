'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { squareData } from '../utils/squareData'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffle = (array: any[]) => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover'
      }}
    />
  ))
}

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [squares, setSquares] = useState(generateSquares())

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares())
      timeoutRef.current = setTimeout(shuffleSquares, 3000)
    }

    shuffleSquares()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  )
}

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-white dark:text-black font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Lets change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Hover me
        </button>
      </div>
      <ShuffleGrid />
    </section>
  )
}

export default ShuffleHero
