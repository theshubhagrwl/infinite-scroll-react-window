import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";

const Home = () => {
  const [card, setCard] = useState([]);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=1`
    );

    const data = await res.json();
    console.log(data);
    setCard(data);
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
    </>
  );
};

export default Home;
