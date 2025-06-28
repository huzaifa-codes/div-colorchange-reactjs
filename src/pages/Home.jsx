import React, { useState } from 'react';
import Button from '../component/Button';
import Divs from '../component/Divs';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState('');
  const colors = [
    "red", "green", "blue", "yellow", "orange",
    "purple", "pink", "brown", "cyan", "magenta",
    "lime", "teal", "indigo"
  ];

  const [divColors, setDivColors] = useState(Array(12).fill(''));

  function handleSelectColor(color) {
    setSelectedColor(color);
  }

  function handleDivClick(index) {
    const newDivColors = [...divColors];
    newDivColors[index] = selectedColor;
    setDivColors(newDivColors);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🎨 Color Picker Grid</h1>

      {/* Color Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {colors.map((item, idx) => (
          <Button key={idx} item={item} Data={handleSelectColor} />
        ))}
      </div>

      {/* Colored Boxes */}
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {divColors.map((item, index) => (
          <Divs key={index} onClick={() => handleDivClick(index)} color={item} />
        ))}
      </div>
    </div>
  );
}
