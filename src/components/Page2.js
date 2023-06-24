import React, { useEffect, useState } from 'react'
import nanoid from 'nanoid'
import Secondtry from './Secondtry'

const Page2 = () => {
  const [chosenAnswer, setChosenAnswer] = useState([])
  const [selector, setSelector] = useState([]);
  const [count, setCount] = useState(0)
  const [textdiplay, setTextDisplay] = useState(false)
  const [resetGame, setResetGame] = useState(false)
  const [newGame, setNewGame] = useState(0)




  useEffect(() => {

    // fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple')
      .then(res => res.json())
      .then(data => { setSelector(data.results) })
      .catch(err => console.error(`this ${err}`))

    // console.log(game())
    // setNewGame(game())
  }, [newGame])

  useEffect(() => {
    const data = selector.map(({ question, correct_answer, incorrect_answers }) => {
      return { question, correct: correct_answer, incorrect: incorrect_answers, selected: '', disabled: false }
    })
    setChosenAnswer(prev => prev = data)
  }, [selector])




  const btnClick = (event) => {

    setChosenAnswer((prev) => prev.map((each) => {
      return each.incorrect.find(element => element === event) ? { ...each, selected: event } : each
    }))

  };


  const submit = () => {
    setTextDisplay(prev => !prev)


    if (resetGame) {
      const p = setNewGame(prev => prev + 1)
      setCount(0)

    } else {
      // const score = chosenAnswer.correct === chosenAnswer.selected ? setCount(prev => prev + 1) : ''
      setChosenAnswer(prev => prev.map(each => {
        return { ...each, disabled: true }
      }))
      const score = chosenAnswer.map(each => each.correct === each.selected ? setCount(prev => prev + 1) : '')

    }
    setResetGame(prev => !prev)


  }




  const createDataComponent = () => chosenAnswer.length < 1 ? [] : chosenAnswer.map(each => <Secondtry correct={each.correct} incorrect={each.incorrect} question={each.question} btnClick={btnClick} selected={each.selected} disabled={each.disabled} />)

  return (
    <>


      <div style={{ display: 'flex', flexDirection: 'column', gap: "8px", justifyContent: 'center', textAlign: "left" }}>
        <h2 style={{ color: 'cyan', textAlign: 'center', fontSize: '40px' }}>Here You Go!!!</h2>
        {createDataComponent()}
        {/* {data} */}
        <div style={{ display: chosenAnswer.length < 1 ? 'none' : 'flex', gap: '13px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >

          <span id='result' style={{ display: textdiplay ? 'block' : 'none', color: 'white', fontSize: '20px', fontWeight: 'bolder' }}>you scored {count} / {chosenAnswer.length} correctly
          </span>

          <button onClick={submit} style={{ padding: '13px 30px', borderRadius: '10px', backgroundColor: 'green', border: 'none', cursor: 'pointer', fontSize: '30px', color: 'white' }}>{resetGame ? 'Reset Game' : 'Submit answers'}</button>
        </div>
      </div>




    </>
    // <div>Page2</div>/
  )
}

export default Page2
