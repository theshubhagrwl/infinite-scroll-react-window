import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{data.id}</p>
        <h2>{data.title.substr(0, 15)}</h2>
        <p>{data.body.substr(0, 150)}</p>
      </div>
    </div>
  );
};

export default Card;
