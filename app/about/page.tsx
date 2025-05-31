'use client'
import { DragCards } from '@/app/components/drag'
import Example from '@/app/components/horizontalScrollCarousel'
import React from 'react'
import { Exampleimages } from '../components/mouseImageTrail'
import { DrawCircleText } from '../components/drawCircleText'

const About = () => {
  return (
    <div>
      <Example />
      <Exampleimages />
      <DrawCircleText />
      <DragCards />
    </div>
  )
}

export default About
