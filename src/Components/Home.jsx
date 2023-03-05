import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import Loader from "./Loader";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();

    //solved: the first page is repeated twice
    if (page !== 1) {
      setCard((prev) => [...prev, ...data]);
    } else {
      setCard([...data]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + window.document.documentElement.scrollTop + 1 >=
        window.document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loader />}
    </>
  );
};

export default Home;
