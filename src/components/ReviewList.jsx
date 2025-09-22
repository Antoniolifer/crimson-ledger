import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {
  console.log("!!!", reviews);
  return (
    <div>
      {reviews.map((r) => {
        return <ReviewCard key={r.id} review={r} />;
      })}
    </div>
  );
}

export default ReviewList;
