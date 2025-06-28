import React from 'react';

export default function Button({ item, Data }) {
  return (
    <button
      onClick={() => Data(item)}
      className="text-white px-4 py-2 rounded-md shadow-md m-2"
      style={{
        backgroundColor: item, // dynamic color still needs inline style
      }}
    >
      {item}
    </button>
  );
}
