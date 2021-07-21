import { useState, useEffect } from 'react';


export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState({width: window.innerWidth})

  useEffect(() => {
    function resetWidth() {
      setScreenWidth({width: window.innerWidth})
    }
    window.addEventListener('resize', resetWidth);
    return()=> window.removeEventListener('resize', resetWidth);
  })
    

    return screenWidth;

}