import React from 'react'

export default function Divs({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: color,
        cursor: 'pointer',
      }}
    ></div>
  )
}
