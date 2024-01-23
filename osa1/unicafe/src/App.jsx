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
  const [stat, setStat] = useState({
    total:0, points:0, average:0, posCount:0, posPerc:0
  })


  const handlePositive = () => {
    const newTotal = stat.total+1
    const newPoints= stat.points+1
    const newPosCount=stat.posCount+1
    setPos(pos+1)
    setStat({
      total: newTotal,
      points: newPoints,
      average: newPoints/newTotal,
      posCount: newPosCount,
      posPerc: newPosCount/newTotal*100
    })
    console.log('pos: stat ', stat)
  }

  const handleNeutral = () => {
    const newTotal = stat.total+1
    setNeu(neu+1)
    setStat({
      ...stat,
      total: newTotal,
      average: stat.points/newTotal,
      posPerc: stat.posCount/newTotal*100
    })
    console.log('neu: stat ', stat)
  }

  const handleNeg = () => {
    const newTotal = stat.total+1
    const newPoints = stat.points-1
    setNeg(neg+1)
    setStat({
      ...stat,
      total: newTotal,
      points: newPoints,
      average: newPoints/newTotal,
      posPerc: stat.posCount/newTotal*100
    })

    console.log('neg: stat ', stat)
  }

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
    <Stats feedback={'total'} count={stat.total}/>
    <Stats feedback={'average'} count={stat.average}/>
    <Stats feedback={'positive'} count={stat.posPerc}/>
 
    </>
  )
}

export default App