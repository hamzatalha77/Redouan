'use client'

import React from 'react'
import { newsData } from '../utils/newsData'

const News = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        {newsData.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group ${
              item.span || ''
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-white dark:bg-black bg-white text-black"
              >
                {item.category}
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-800">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  {item.date}
                </span>
                <span className="leading-none uppercase">{item.month}</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-800"
              >
                {item.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
