import UserCard from "./UserCard";

function ReviewCard({ review }) {
  return (
    <div className="text-left w-full  border-gray-200 border-2 rounded-xl p-4 shadow-md shadow-white/25">
      {/* <h2>Game: {review.game}</h2> */}
      <p className="text-2xl italic text-center">
        {review.text}
        <br />
        {review.score}/10.
      </p>

      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-end text-lg">
          <button className="transition-all duration-200 bg-gray-200 border-2 border-gray-500 text-black hover:text-white hover:border-white hover:bg-gray-500 px-4 py-1 rounded-xl  cursor-pointer">
            Like
          </button>
          <button className="transition-all duration-200 bg-red-500/75 border-2 border-red-500/75 hover:bg-red-600/75 hover:border-white px-4 py-1 rounded-xl cursor-pointer">
            Save
          </button>
          <h2 className="self-center">
            {review.likes === 0
              ? "Be the first to like this review"
              : `${review.likes} ${
                  review.likes === 1 ? "person" : "people "
                } liked this
        review.`}
          </h2>
        </div>
        <UserCard user={review.user} date={review.date} />
      </div>
    </div>
  );
}

export default ReviewCard;
