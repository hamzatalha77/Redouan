'use client'
import { DragCards } from '@/app/components/drag'
import Example from '@/app/components/horizontalScrollCarousel'
import React from 'react'
import { Exampleimages } from '../components/mouseImageTrail'
import TrippyScroll from '../components/trippyScroll'
import { DrawCircleText } from '../components/drawCircleText'

const About = () => {
  return (
    <div>
      <Example />
      <Exampleimages />
      <DrawCircleText />
      <TrippyScroll />
      <DragCards />
    </div>
  )
}

export default About
