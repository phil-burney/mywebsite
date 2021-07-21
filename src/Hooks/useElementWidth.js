import { useState, useEffect } from 'react';
export default function useComponentWidth(component) {
  const [width, setComponentWidth] = useState(0)

  useEffect(() => {
    function resetWidth() {
      setComponentWidth({width: component.current.currentWidth})
    }
    window.addEventListener('resize', resetWidth);
    return()=> window.removeEventListener('resize', resetWidth);
  })
  return width;
};