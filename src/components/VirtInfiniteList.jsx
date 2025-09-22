import React, {
  memo,
  useCallback,
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

function InfiniteWrapper({
  children,
  numItems,
  setItems,
  setIsFinished,
  outerEventListenerHandle,
}) {
  //effect for new data fetch
  outerEventListenerHandle.current = useCallback(
    (event) => {
      //trigger fetch when 2 items before the end are left, item height is 75px,
      // and the initial offset of the container is 200px, which is the height of the container.

      if (event.target.scrollTop >= (numItems - 2) * 75 - 200) {
        const res = getData(numItems, numItems + 10);
        if (res) {
          setItems((prev) => [...prev, ...res]);
        } else {
          setIsFinished(true);
        }
      }
    },
    [numItems, setIsFinished, setItems]
  );

  return <>{children}</>;
}

function VirtualWrapper({
  children,
  setStartIndex,
  containerRef,
  outerEventListenerHandle,
}) {
  const handleVirtualScroll = useCallback(
    (event) => {
      const newStartIndex = Math.floor(event.target.scrollTop / 75);
      setStartIndex(newStartIndex);
      outerEventListenerHandle.current(event);
    },
    [setStartIndex, outerEventListenerHandle]
  );

  //effect to set up scroll event listener
  useEffect(() => {
    if (!containerRef) {
      return;
    }
    const container = containerRef.current;
    container.addEventListener("scroll", handleVirtualScroll);
    return () => {
      container.removeEventListener("scroll", handleVirtualScroll);
    };
  }, [containerRef, handleVirtualScroll]);

  return <>{children}</>;
}

function VirtualisedInfiniteList() {
  const [items, setItems] = useState(() => getData(0, 10));

  const likeItem = useCallback((val) => {
    setItems((prev) =>
      prev.map((x) => (x.val === val ? { ...x, liked: !x.liked } : x))
    );
  }, []);

  const containerRef = useRef(null);

  const outerEventListenerHandle = useRef(null);
  const [isFinished, setIsFinished] = useState(false);

  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, startIndex + 6);
  }, [startIndex, items]);

  return (
    <>
      <InfiniteWrapper
        numItems={items.length}
        setItems={setItems}
        setIsFinished={setIsFinished}
        outerEventListenerHandle={outerEventListenerHandle}
      >
        <VirtualWrapper
          setStartIndex={setStartIndex}
          containerRef={containerRef}
          outerEventListenerHandle={outerEventListenerHandle}
        >
          <List
            containerRef={containerRef}
            items={visibleItems}
            startIndex={startIndex}
            likeItem={likeItem}
          />
        </VirtualWrapper>
      </InfiniteWrapper>

      {isFinished && (
        <p className="text-center m-1">
          You have scrolled to the end of the list.
        </p>
      )}
    </>
  );
}

function List({ containerRef, items, startIndex, likeItem }) {
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
      <div style={{ height: `${items.length * 75}px` }}>
        <div
          style={{
            position: "relative",
            top: `${startIndex * 75}px`,
          }}
        >
          {items.map((val) => (
            <ListItem key={val.val} value={val} likeItem={likeItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ListItem = memo(function ({ value, likeItem }) {
  console.log("item #", value.val, " rerendered.");
  return (
    <li
      key={value.val}
      className="border-1 h-[70px] border-yellow-500 rounded-xl my-[5px]"
    >
      Item #{value.val}
      <button onClick={() => likeItem(value.val)}>
        {value.liked ? "liked <3" : "click to like"}
      </button>
    </li>
  );
});

export default VirtualisedInfiniteList;
