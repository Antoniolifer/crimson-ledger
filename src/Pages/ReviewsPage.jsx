import React from "react";
import useReviewStore from "../globalStore/reviewStore";

import Title from "../components/Title";
import MinimisedReviewsList from "../components/MinimisedReviewsList";
//need a review card with the game cover pic.
//need sorted lists - like "hot" (recent and highly rated, past week for example),
// best(best of all time),
// and new(sorted by date)

function ReviewsPage() {
  const reviews = useReviewStore((state) => state.reviews);
  return (
    <div className="mx-auto w-4/5">
      <Title>Popular Reviews</Title>
      <MinimisedReviewsList reviews={reviews} sorting="popular" />
      <Title>Best Reviews</Title>
      <MinimisedReviewsList reviews={reviews} sorting="best" />

      <Title>New Reviews</Title>
      <MinimisedReviewsList reviews={reviews} sorting="new" />
    </div>
  );
}

export default ReviewsPage;
