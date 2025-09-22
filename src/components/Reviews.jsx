import React from "react";
import useReviewStore from "../globalStore/reviewStore";
import Title from "./Title";
import ReviewCard from "./ReviewCard";
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

export default Reviews;
