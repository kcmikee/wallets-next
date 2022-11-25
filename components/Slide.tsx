import React, { useEffect, useState } from "react";

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className="" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousell = ({ active, setActive, children }: any) => {
  //   const [active, setActive] = useState(0);
  //   const [paused, setPaused] = useState(false);

  //   const updateIndex = (newIndex: any) => {
  //     if (newIndex < 0) {
  //       newIndex = React.Children.count(children) - 1;
  //     } else if (newIndex >= React.Children.count(children)) {
  //       newIndex = 0;
  //     }

  //     setActive(newIndex);
  //   };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (!paused) {
  //         updateIndex(active + 1);
  //       }
  //     }, 3000);

  //     return () => {
  //       if (interval) {
  //         clearInterval(interval);
  //       }
  //     };
  //   });

  return (
    <div
      className="carousel"
      //   onMouseEnter={() => setPaused(true)}
      //   onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner relative  w-[80%] flex flex-col justify-center items-center mx-auto"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      {/* <div className="indicators">
        <button
          onClick={() => {
            updateIndex(active - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === active ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(active + 1);
          }}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Carousell;
