import React, { useState, useEffect } from 'react'
import { ProgressBar, ProgressHeader, HeaderHolder } from './TrainStyle'

function ReadingProgress ({ target }) {
  const [readingProgress, setReadingProgress] = useState(0)
  const scrollListener = () => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })
  useEffect(() => {
    window.addEventListener('load', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })
  return (
    <ProgressBar>
      <HeaderHolder>
        <ProgressHeader>Module 1</ProgressHeader>
        <ProgressHeader>Module 2</ProgressHeader>
        <ProgressHeader>Module 3</ProgressHeader>
        <ProgressHeader>Module 4</ProgressHeader>
        <ProgressHeader>Module 5</ProgressHeader>
      </HeaderHolder>
      <div
        style={{
          height: '10px',
          width: `${40 + readingProgress / 20}%`,
          backgroundColor: 'blue',
        }}
      />
    </ProgressBar>
  )
}

export default ReadingProgress
