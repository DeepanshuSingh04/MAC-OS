import React from 'react'
import { Rnd } from 'react-rnd'
import "./windows.scss"

const MacWindows = ({children}) => {
  return (
    <Rnd>
        <div className="window">
            <div className="nav">
                <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                </div>
            
                <div className="title"><p>deepanshusingh -zsh</p></div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>  
    </Rnd>
  )
}

export default MacWindows


// react-rnd library is used for drag and drop feature so using that 
// now we can make moving resizable component