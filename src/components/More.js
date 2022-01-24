import React from 'react';

const More = (props) => {
  return (
    <div className="expand-box">
      <div className="stat-box zone">
        <h3 className="info-title">Current Timezone</h3>
        <p className="info-stat">{props.localZone}</p>
      </div>

      <div className="stat-box d-year">
        <h3 className="info-title">Day of the year</h3>
        <p className="info-stat">{props.dayOfYear}</p>
      </div>
      <div className="stat-box d-week">
        <h3 className="info-title">Day of the week</h3>
        <p className="info-stat">{props.dayOfWeek}</p>
      </div>
      <div className="stat-box week">
        <h3 className="info-title">Week number</h3>
        <p className="info-stat">{props.weekNum}</p>
      </div>
    </div>
  );
};

export default More;
