import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div class="card text-left">
      <img class="card-img-top" src={image} alt={name} />
      <div class="card-body">
        <h4 class="card-title">{name}</h4>
        <p class="card-text">
          {readMore ? info : `${info.substring(0, 200)}....`}
        </p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-link"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
          <button className="btn btn-danger" onClick={() => removeTour(id)}>
            Remove This Tour
          </button>
        </div>
      </div>
      <div className="card-footer">${price}</div>
    </div>
  );
};

export default Tour;
