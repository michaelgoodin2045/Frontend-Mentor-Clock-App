import React, { useState, useEffect } from 'react';
import More from './More';
import Location from './Location';
import Quotes from './Quotes';
import Greeting from './Greeting';
import Button from './Button';

const Clock = () => {
  const [clockState, setClockState] = useState();
  const [timezone, setTimezone] = useState();
  const [localTimezone, setLocalTimezone] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [dayOfYear, setDayOfYear] = useState();
  const [weekNum, setWeekNum] = useState();
  const [moreOpen, setMoreOpen] = useState(false);

  const handleToggle = () => {
    setMoreOpen(!moreOpen);
  };

  useEffect(() => {
    const getTime = async () => {
      setInterval(() => {
        const time = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        setClockState(time);
      }, 1000);
      const url = 'http://worldtimeapi.org/api/ip';
      const response = await fetch(url);
      const data = await response.json();
      setTimezone(data.abbreviation);
      setLocalTimezone(data.timezone.replace(/_/g, ' '));
      setDayOfWeek(data.day_of_week);
      setDayOfYear(data.day_of_year);
      setWeekNum(data.week_number);
    };
    getTime();
  }, []);

  return (
    <>
      <div className={`box ${moreOpen ? 'show-box' : ''}`}>
        <div className={`quote-box ${moreOpen ? 'close-quote' : ''}`}>
          <Quotes />
        </div>

        <div className={`clock-box ${moreOpen ? 'show-clock' : ''}`}>
          <Greeting />
          <div className="clock-line">
            <div className="clock">{clockState}</div>
            <div className="timezone">{timezone}</div>
          </div>

          <Location />
        </div>
        <div
          onClick={handleToggle}
          className={`button-box ${moreOpen ? 'more-open' : 'more-close'}`}
        >
          <Button />
        </div>
        <div className={`more-box ${moreOpen ? 'show-more' : ''}`}>
          <More
            localZone={localTimezone}
            dayOfWeek={dayOfWeek}
            dayOfYear={dayOfYear}
            weekNum={weekNum}
          />
        </div>
      </div>
    </>
  );
};

export default Clock;
