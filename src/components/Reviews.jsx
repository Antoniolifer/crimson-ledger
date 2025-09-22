import React from "react";
import useReviewStore from "../globalStore/reviewStore";
import Title from "./Title";

function Reviews() {
  console.log("rendered reviews list");

  const reviews = useReviewStore((state) => state.reviews);
  return (
    <>
      <Title>Reviews</Title>

      <div className="my-2 w-full flex gap-2 flex-wrap flex-row">
        {reviews.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </div>
    </>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="text-left w-3/10 border-white border-2 rounded-xl p-4">
      <h1>Review by {review.user.username}</h1>
      <h2>Game: {review.game}</h2>
      <p>{review.text}</p>
      <h2>{review.score}/10</h2>
    </div>
  );
}

export default Reviews;
