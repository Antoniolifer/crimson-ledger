function ReviewCard({ review }) {
  return (
    <div className="text-left w-full  border-white border-2 rounded-xl p-4">
      <h1>Review by {review.user.username}</h1>
      <h2>Game: {review.game}</h2>
      <p>{review.text}</p>
      <h2>{review.score}/10</h2>
      <h2>Posted on {review.date.toLocaleDateString()}</h2>
      <h2>
        {review.likes === 0
          ? "Be the first to like this review"
          : `${review.likes} ${
              review.likes === 1 ? "person" : "people "
            } liked this
        review.`}
      </h2>
    </div>
  );
}

export default ReviewCard;
