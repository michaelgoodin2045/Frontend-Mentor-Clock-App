import React, { useEffect } from 'react';
import { useState } from 'react';

const Location = () => {
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    const getLocation = async () => {
      const url = 'https://freegeoip.app/json/';
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.city);
      setRegion(data.region_code);
      setCountry(data.country_code);
    };
    getLocation();
  }, []);

  return (
    <div className="location-box">
      in {city}, {region}, {country}
    </div>
  );
};

export default Location;
