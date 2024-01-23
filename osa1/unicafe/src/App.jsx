import { useState } from 'react'

const Header = ({header}) => <h2>{header}</h2>

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>{text}</button>

const Stats = ({feedback, count}) => {
  return(
    <p>{feedback}: {count}</p>
  )
}


const App = () => {

  const [pos, setPos] = useState(0)
  const [neu, setNeu] = useState(0)
  const [neg, setNeg] = useState(0)

  const handlePositive = () => setPos(pos+1)
  const handleNeutral = () => setNeu(neu+1)
  const handleNeg = () => setNeg(neg+1)

  return(
    <>
    <Header header={'Give Feedback'} />
    <Button handleClick={handlePositive} text={'Positive'} />
    <Button handleClick={handleNeutral} text={'Neutral'} />
    <Button handleClick={handleNeg} text={'Negative'} />
    <Header header={'Statistics'} />
    <Stats feedback={'positive'} count={pos}/>
    <Stats feedback={'neutral'} count={neu}/>
    <Stats feedback={'negative'} count={neg}/>

    </>
  )
}

export default App