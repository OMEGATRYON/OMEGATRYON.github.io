import React from 'react'

const Home = () => {
  return (
    <div className="circle-photo-container">
    <img src="/images/header.jpg" alt="header of me" className="circle-photo" />
    <div className="description">
        <p className='tryhead'>Tryon Baldwin</p>
        <p>Full Stack Web Developer</p>
        <p className='langbio'>JavaScript, React, Bootstrap, Python, Django </p>
        <p className='langtwo'>object-oriented programming, agile methodologies, and PostgresSQL.</p>
      </div>
  </div>
  )
}

export default Home