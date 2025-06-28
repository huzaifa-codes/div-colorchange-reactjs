import React from 'react';

export default function Divs({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[100px] h-[100px] border border-black cursor-pointer rounded-md shadow-md hover:scale-105 transition-transform duration-200"
      style={{ backgroundColor: color }}
    ></div>
  );
}
