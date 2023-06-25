import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => {

  const buttonClick = () => {
    // {<Page2/>}
  }

  return (
    <>
      <div className="body-contain">
        <main className="main-page1">
          <h1 style={{ color: 'cyan', fontFamily: 'spectral', fontWeight: 'bolder' }}>Quizzical</h1>
          <h3 style={{ color: 'green', fontFamily: 'spectral', fontWeight: 'bolder' }}>Techies---Get All Answers correctly to win a $1k!!!</h3>
          <Link to="/page2">
            <button className="pageone-btn" onClick={buttonClick}>
              Start Quiz</button></Link>

        </main>
      </div>
    </>
  )
}

export default Home