import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-06-29T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Shotglasses collected from travels',
    value: 116,
  },
  {
    key: 'dives',
    label: 'Dives logged',
    value: 104,
  },
  {
    key: 'belt',
    label: 'Jiu Jitsu belt progress',
    value: 'Purple Belt, 0 stripes',
  },
  {
    key: 'CSGO',
    label: 'Counter Strike 2 Premier Rank',
    value: '~18000',
    link: 'https://csgorankings.com/profile/76561198043553359',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Silver Spring, MD',
  },
];

export default data;
