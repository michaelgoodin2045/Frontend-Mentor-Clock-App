import React, { useEffect, useState } from 'react';
import Clock from './Clock';

const Background = () => {
  const [hours, setHours] = useState();
  const morning = 5;
  const evening = 18;

  useEffect(() => {
    let hour = new Date().getHours();
    setHours(hour);
  }, []);
  return (
    <div
      className={`${
        hours >= morning && hours < evening ? 'morning' : 'evening'
      }`}
    >
      <Clock />
    </div>
  );
};

export default Background;
