import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80,
].map((x) => (x = { val: x, liked: false }));

function getData(start, end) {
  if (end > data.length) {
    return false;
  }
  return data.slice(start, end);
}

const scrollContext = createContext(null);

function ScrollContextProvider({ children, containerRef }) {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback((event) => {
    setScrollTop(event.target.scrollTop);
    console.log("scroll triggered, it is now:", event.target.scrollTop);
  }, []);

  //effect to set up scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef, handleScroll]);
  return (
    <scrollContext.Provider value={scrollTop}>
      {children}
    </scrollContext.Provider>
  );
}

function InfiniteWrapper({ children, numItems, setItems, setIsFinished }) {
  const scrollTop = useContext(scrollContext);

  //effect for new data fetch
  useEffect(() => {
    //trigger fetch when 2 items before the end are left, item height is 75px,
    // and the initial offset of the container is 200px, which is the height of the container.
    // console.log("scroll triggered, it's now: ", scrollTop);

    if (scrollTop >= (numItems - 2) * 75 - 200) {
      const res = getData(numItems, numItems + 10);
      if (res) {
        setItems((prev) => [...prev, ...res]);
      } else {
        setIsFinished(true);
      }
    }
  }, [scrollTop, numItems, setIsFinished, setItems]);

  return <>{children}</>;
}

function VirtualWrapper({ children, setStartIndex }) {
  const scrollTop = useContext(scrollContext);

  useEffect(() => {
    const newStartIndex = Math.floor(scrollTop / 75);
    setStartIndex(newStartIndex);
  }, [scrollTop, setStartIndex]);

  return <>{children}</>;
}

function VirtualisedInfiniteList() {
  const [items, setItems] = useState(() => getData(0, 80));

  const likeItem = useCallback((val) => {
    setItems((prev) =>
      prev.map((x) => (x.val === val ? { ...x, liked: !x.liked } : x))
    );
  }, []);
  const containerRef = useRef(null);
  const [isFinished, setIsFinished] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  //relevant for virt list
  //window height - 200px
  //can see at most 4 items, so render total of 6.

  //both
  //item height - 70px
  //item margin - 5px

  //infinite list
  //initially, 10 items are loaded (750px),
  // when you are 2 items away from the end(at 600px mark + *intial window size offset*),
  //load 10 more

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, startIndex + 6);
  }, [startIndex, items]);
  return (
    <ScrollContextProvider containerRef={containerRef}>
      {/* <InfiniteWrapper
        numItems={items.length}
        setItems={setItems}
        setIsFinished={setIsFinished}
      > */}
      <VirtualWrapper setStartIndex={setStartIndex} startIndex={startIndex}>
        <List
          containerRef={containerRef}
          items={visibleItems}
          startIndex={startIndex}
          likeItem={likeItem}
        />
      </VirtualWrapper>
      {/* </InfiniteWrapper> */}

      {isFinished && (
        <p className="text-center m-1">
          You have scrolled to the end of the list.
        </p>
      )}
    </ScrollContextProvider>
  );
}

function List({ containerRef, items, startIndex, likeItem }) {
  console.log("start index:", startIndex);
  return (
    <div
      ref={containerRef}
      style={{
        height: "200px",
        width: "250px",
        margin: "12px auto",
        overflow: "scroll",
        border: "4px solid white",
        borderRadius: "10px",
        padding: "0 4px",
      }}
    >
      <div style={{ height: `${80 * 75}px` }}>
        <div
          style={{
            position: "relative",
            top: `${80 * 75}px`,
          }}
        />
        {items.map((val) => (
          <ListItem key={val.x} value={val} likeItem={likeItem}></ListItem>
        ))}
      </div>
    </div>
  );
}

const ListItem = memo(function ({ value, likeItem }) {
  // console.log("item #", value.val, " rerendered.");
  return (
    <li className="border-1 h-[70px] border-yellow-500 rounded-xl my-[5px]">
      Item #{value.val}
      <button onClick={() => likeItem(value.val)}>
        {value.liked ? "liked <3" : "click to like"}
      </button>
    </li>
  );
});

export default VirtualisedInfiniteList;
