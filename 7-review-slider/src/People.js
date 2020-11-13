import React, { useState, useEffect } from 'react'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

function People() {
  const [review, setReview] = useState(data)
  const [value, setValue] = useState(0)

  useEffect(() => {
    let lastValue = review.length - 1
    if (value < 0) {
      setValue(lastValue)
    }
    if (value > lastValue) {
      setValue(0)
    }
  }, [value, review])

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [value])

  return (
    <>
      {review.map((people, index) => {
        const { id, image, name, title, quote } = people

        let position = 'nextSlide'
        if (index === value) {
          position = 'activeSlide'
        }
        if (
          index === value - 1 ||
          (value === 0 && index === review.length - 1)
        ) {
          position = 'lastSlide'
        }

        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button className="prev" onClick={() => setValue(value - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setValue(value + 1)}>
        <FiChevronRight />
      </button>
    </>
  )
}

export default People
