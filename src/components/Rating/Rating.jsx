import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Stars() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rating)
    // other logic
  }
  return (
    <Rating onClick={handleRating} ratingValue={rating} fillColor="#FF6060" />
  )
}
