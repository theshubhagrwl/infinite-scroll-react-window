import React from "react";
import Card from "./Card";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <Card key={id} data={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
