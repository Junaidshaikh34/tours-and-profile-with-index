import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <h1>Tours</h1>
      <div className="d-flex gap-3">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
