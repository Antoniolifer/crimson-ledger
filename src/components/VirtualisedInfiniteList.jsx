import React, { memo, useCallback, useEffect, useRef, useState } from "react";
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function getData(start, end) {
  if (end > data.length) {
    return false;
  }
  return data.slice(start, end);
}

function InfiniteWrapper({
  children,
  numItems,
  setItems,
  setIsFinished,
  containerRef,
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = useCallback((event) => {
    setScrollTop(event.target.scrollTop);
  }, []);

  //effect to set up scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef, handleScroll]);

  //effect for new data fetch
  useEffect(() => {
    if (scrollTop >= (numItems - 2) * 75 - 200) {
      const res = getData(numItems, numItems + 10);
      if (res) {
        setItems((prev) => [...prev, ...res]);
      } else {
        setIsFinished(true);
      }
    }
  }, [scrollTop, numItems, setIsFinished, setItems]);

  return <div>{children}</div>;
}

function VirtualWrapper({ containerRef }) {}

function VirtualisedInfiniteList() {
  const [items, setItems] = useState(() => getData(0, 10));
  const containerRef = useRef(null);
  const [isFinished, setIsFinished] = useState(false);

  //relevant for virt list
  //window height - 200px

  //both
  //item height - 70px
  //item margin - 5px

  //infinite list
  //initially, 10 items are loaded (750px),
  // when you are 2 items away from the end(at 600px mark + *intial window size offset*),
  //load 10 more

  return (
    <>
      <InfiniteWrapper
        numItems={items.length}
        setItems={setItems}
        setIsFinished={setIsFinished}
        containerRef={containerRef}
      >
        <List containerRef={containerRef} items={items} />
      </InfiniteWrapper>

      {isFinished && (
        <p className="text-center m-1">
          You have scrolled to the end of the list.
        </p>
      )}
    </>
  );
}

function List({ containerRef, items }) {
  return (
    <ul
      ref={containerRef}
      className="h-[200px] w-42 mx-auto overflow-scroll my-4 border-white border-2 rounded-xl px-1"
    >
      {items.map((val, index) => (
        <ListItem key={index} value={index}></ListItem>
      ))}
    </ul>
  );
}

const ListItem = memo(function ({ value }) {
  console.log("item #", value, " rerendered.");
  return (
    <li className="border-1 h-[70px] border-yellow-500 rounded-xl my-[5px]">
      Item #{value + 1}
    </li>
  );
});

export default VirtualisedInfiniteList;
