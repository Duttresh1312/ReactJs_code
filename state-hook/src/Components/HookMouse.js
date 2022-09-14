import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosititon= e => {
        console.log('MOuse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect is called');
        window.addEventListener('mousemove', logMousePosititon)

        return () => {console.log('Component unmounting code');
        window.removeEventListener('mousemove',logMousePosititon)
      }

    }, [])
  return (
    <div>
        Mouse X: {x} Y: {y} 
    </div>
  )
}

export default HookMouse