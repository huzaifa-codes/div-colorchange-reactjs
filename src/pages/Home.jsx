import React, { useState } from 'react'
import Button from '../component/Button'
import Divs from '../component/Divs';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState('')
  const colors = [
    "red", "green", "blue", "yellow", "orange",
    "purple", "pink", "brown", "cyan", "magenta",
    "lime", "teal", "indigo"
  ];

  const [divColors, setDivColors] = useState(Array(12).fill(''))

  function handleSelectColor(color) {
    setSelectedColor(color)
  }

  function handleDivClick(index) {
    const newDivColors = [...divColors]
    newDivColors[index] = selectedColor
    setDivColors(newDivColors)
  }

  return (
   <div>
     <div className="flex gap-2 p-4">
        {colors.map((item, idx) => (
          <Button key={idx} item={item} Data={handleSelectColor} />
        ))}
      </div>
      <div>{divColors.map((item , index)=>{
        return (
           <Divs onClick={()=> handleDivClick(index)} color={item}/>
        )
      })}</div>
   </div>
  )
}
