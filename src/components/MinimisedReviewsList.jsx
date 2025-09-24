import React from "react";
import MinimisedReviewCard from "./MinimisedReviewCard";
//sorting = 'new', 'popular', 'best'
function MinimisedReviewsList({ reviews, sorting }) {
  return (
    <div className="h-36 w-4/5 border-2 border-white rounded-xl p-2 my-2 overflow-x-scroll">
      <div className="relative flex gap-2 w-auto flex-row ">
        {reviews
          .filter(() => true)
          .map((r) => {
            return <MinimisedReviewCard />;
          })}
      </div>
    </div>
  );
}

export default MinimisedReviewsList;
