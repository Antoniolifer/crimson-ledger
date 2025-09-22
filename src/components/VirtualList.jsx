const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80,
].map((x) => (x = { val: x, liked: false }));

import React, { useState } from "react";

function VirtualList() {
  const [items, setItems] = useState(data);

  const [startIndex, setStartIndex] = useState(0); // end index will be start + visible count.
  const visibleCount = 6; // 400 / 50 = 8, and add 2 as 'padding'.
  const itemHeight = 75;

  const handleScroll = (e) => {
    setStartIndex(Math.floor(e.target.scrollTop / itemHeight));
  };
  return (
    <div
      onScroll={handleScroll}
      style={{
        overflow: "scroll",
        height: "200px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <div style={{ height: `${items.length * itemHeight}px` }}>
        <div
          style={{ position: "relative", top: `${startIndex * itemHeight}px` }}
        >
          {items
            .slice(startIndex, startIndex + visibleCount + 2)
            .map((item, index) => {
              return (
                <p
                  key={index}
                  style={{
                    width: "150px",
                    padding: "4px 12px",
                    height: `${itemHeight - 5}px`,
                    border: "1px solid white",
                    margin: "5px 2px",
                  }}
                >
                  {item.val}
                  {item.liked ? "liked <3" : "click to like"}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default VirtualList;
