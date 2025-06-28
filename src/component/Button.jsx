import React from 'react'

export default function Button({item , Data}) {
  return (
  <button onClick={()=>{
    Data(item)
  }} style={{
    backgroundColor : item
  }}>{item}</button>
  )
}
