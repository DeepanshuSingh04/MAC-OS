import React from 'react'
import githubData from "../../assets/github.json"
import MacWindows from './MacWindows'

const github = () => {
  return (
    <MacWindows>
      <div className="cards">
        {githubData.map(project => {
          return 
        })}
      </div>
    </MacWindows>
  )
}

export default Github
