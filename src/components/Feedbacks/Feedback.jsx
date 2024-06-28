import React from "react";
import "./Feedback.css";
import FeedbackCard from "./FeedbackCard";

export default function Feedback(props) {
  if (!props.selectedCinema) return null;

  return (
    <div className="feedbacks">
      <h2 className="title">Feedbacks</h2>

      {props.selectedCinema.feedback.map((feed) => (
        <FeedbackCard key={feed.id} feedback={feed}/>
      ))}
      
    </div>
  );
}
