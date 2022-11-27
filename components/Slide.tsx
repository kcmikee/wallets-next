import React from "react";

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousell = ({ active, setActive, children }: any) => {
  return (
    <div className="carousel">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { width: "100%" });
      })}
    </div>
  );
};

export default Carousell;
