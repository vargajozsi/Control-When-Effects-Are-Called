import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000);
    return () => { clearInterval(intervalId) };

  }, []);
  const handleChange = ({ target }) => {
    setName(target.value);
  }


  return (
    <>
      <input value={name} onChange={handleChange} />
      <h1>Time: {time}</h1>
      <h2>{name}</h2> /* optional */
    </>
  );
}


