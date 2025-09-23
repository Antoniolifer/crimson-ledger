import React from "react";
import useReviewStore from "../globalStore/reviewStore";
import Title from "./Title";
import UserCard from "./UserCard";
function Users() {
  console.log("rendered users list.");

  const users = useReviewStore((state) => state.users);

  return (
    <>
      <Title>Popular reviewers</Title>
      <ul className="flex my-2 gap-2">
        {users.map((user, index) => {
          return <UserCard key={index} user={user} />;
        })}
      </ul>
    </>
  );
}

export default Users;
