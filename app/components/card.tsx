'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Grow faster with our
          <span className="text-slate-400"> all in one solution</span>
        </h2>
        <div className="bg-white min-h-[200px] items-center justify-center">
          <button className="px-6 py-2 font-medium bg-white dark:bg-black text-black dark:text-white w-fit transition-all shadow-[3px_3px_0px_gray] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            Hover me
          </button>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Do a thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black dark:text-white">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Do another thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black dark:text-white">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>And this too</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black dark:text-white">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And finally this</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black dark:text-white">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  )
}

const BounceCard = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: '-1deg' }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl shadow-xl/20 p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  )
}
