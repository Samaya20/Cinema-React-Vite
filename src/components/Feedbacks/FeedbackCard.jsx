import React from 'react'

export default function FeedbackCard({feedback}) {
  return (
    <div className="feed-card">
        <h3>{feedback.writer}</h3>
    </div>
  )
}
