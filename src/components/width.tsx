'use client';
import React, { useEffect, useState } from 'react';
export default function Width() {
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Width</h1>
      <p style={{ color: active ? "red" : "green" }}>Width: {width}</p>
      <button onClick={() => setActive((b) => !b)}>On</button>
    </div>
  );
}
