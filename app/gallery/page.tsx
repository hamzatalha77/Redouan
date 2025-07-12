'use client'
import React from 'react'
import { DragCards } from '@/app/components/drag'
import Example from '@/app/components/horizontalScrollCarousel'
import { Exampleimages } from '../components/mouseImageTrail'
import { DrawCircleText } from '../components/drawCircleText'
import FeaturedWork from '../components/FeaturedWork'

const Gallery = () => {
  return (
    <React.Fragment>
      <FeaturedWork />
      <Example />
      <Exampleimages />
      <DrawCircleText />
      <DragCards />
    </React.Fragment>
  )
}

export default Gallery
