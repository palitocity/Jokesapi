import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
export const datafeed = React.createContext();
const Jokes = ({ cardurl }) => {
  const [card, setCardDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  const limit = 16;
  const startIndex = useMemo(() => (page - 1) * limit, [page, limit]);
  const endIndex = useMemo(() => page * limit, [page, limit]);
  const updateCardData = useCallback(() => {
    if (!card) return;
    setCardData((cardData) => {
      return [...cardData, ...card.slice(startIndex, endIndex)];
    });
  }, [card, endIndex, startIndex]);

  useEffect(() => {
    updateCardData();
  }, [updateCardData]);
  useEffect(() => {
    const getData = async () => {
      try {
        setCardData([]);
        const result = await axios.get(cardurl);

        setCardDetails(result.data.result);
        console.log("joke is here ", result);
      } catch (err) {
        console.log("Can't fetch all", err);
      }
    };
    getData();
  }, [cardurl]);
  useEffect(() => {
    const loadMore = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 160
      ) {
        if (!card) return;
        setLoading(true);
        setTimeout(() => {
          setPage((page) => page + 1);
          setLoading(false);
        }, 3000);
      }
    };
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [card]);
  const results = cardData.map((data) => (
    <datafeed.Provider value={data.value}>
      <div className="joke_card" key={data.url}>
        <h3>NO title</h3>
        <p>{data.value}</p>
        <a href="/jokes" data-title="No title" data-value={data.value}>
          see Stat
        </a>
      </div>
    </datafeed.Provider>
  ));

  return (
    <>
      <div className="display_data">{results}</div>
      {loading && "Loading..."}
    </>
  );
};

export default Jokes;
