import React, { useCallback, useEffect, useState } from 'react';
import refresh from '../assets/desktop/icon-refresh.svg';

const Quotes = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  const getQuote = useCallback(async () => {
    const url = 'https://api.quotable.io/random';
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  }, []);
  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <>
      <div className="quote-content">
        <div className="quote">"{quote}"</div>
        <div className="author">{author}</div>
      </div>

      <div className="refresh" onClick={getQuote}>
        <img src={refresh} alt="refresh_icon" />
      </div>
    </>
  );
};

export default Quotes;
