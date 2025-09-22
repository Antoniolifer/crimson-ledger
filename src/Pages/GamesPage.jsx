import React from "react";
import NewVirtualisedInfiniteList from "../components/VirtInfiniteList";
import VirtualList from "../components/VirtualList";

function GamesPage() {
  return (
    <div>
      <h2>GamesPage</h2>
      <NewVirtualisedInfiniteList />
      {/* <VirtualList /> */}
    </div>
  );
}

export default GamesPage;
