function UserCard({ user, date = null }) {
  return (
    <div className="flex justify-end gap-2 items-center  p-2 bg-gray-700 rounded-xl ">
      <div>
        <h1>{user.username}</h1>
        {date && (
          <p className="text-xs text-gray-400 text-right">
            {date.toLocaleDateString()}
          </p>
        )}
      </div>
      <img
        className="rounded-full w-12 h-12 border-3 border-red-600"
        src="/grubpfp.png"
        alt="a Green Grub from Hollow Knight"
        srcset=""
      />
    </div>
  );
}

export default UserCard;
