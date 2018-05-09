import React from 'react'
import './skill.css'

const Skill = ({ label, score }) => {
  const scoreArray = Array.from(Array(score).keys())
  const leftArray = Array.from(Array(5 - score).keys())
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
      }}
    >
      <span>{label}</span>
      <div className="score">
        {scoreArray.map(i => <span className="star" key={`${label}_${i}`} />)}
        {leftArray.map(i => <span key={`${label}_${5 - i}`} />)}
      </div>
    </div>
  )
}

export default Skill
