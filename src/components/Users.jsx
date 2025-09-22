import React from "react";
import useReviewStore from "../globalStore/reviewStore";
import Title from "./Title";

function Users() {
  console.log("rendered users list.");

  const users = useReviewStore((state) => state.users);

  return (
    <>
      <Title>Popular reviewers</Title>
      <ul className="flex my-2 gap-2">
        {users.map((user, index) => {
          return (
            <li key={index} className=" border-1 border-white rounded-xl p-4">
              {user.username}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
