import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

const Greeting = () => {
  const [hours, setHours] = useState();
  const morning = 5;
  const noon = 12;
  const evening = 18;

  useEffect(() => {
    let hour = new Date().getHours();

    setHours(hour);
  }, []);

  return (
    <div className="greeting-box">
      <div
        className={`${hours >= morning && hours < evening ? 'sun' : 'moon'}`}
      ></div>
      <div className="greeting-day-part">
        {hours >= noon && hours < evening
          ? 'Good afternoon'
          : hours >= evening || hours < morning
          ? 'Good evening'
          : 'Good morning'}
      </div>
      <MediaQuery minWidth={740}>
        <div className="greeting-current">, It's Currently</div>
      </MediaQuery>
    </div>
  );
};

export default Greeting;
