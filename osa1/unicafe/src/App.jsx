import { useState } from 'react'

const Header = ({header}) => <h2>{header}</h2>

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>{text}</button>

const Statistics = ({values}) => {
  if(values[3].total === 0)
    return <p>No Feedback given</p>

  return(
    <div>
    <StatisticLine text={'positive'} value={values[0]}/>
    <StatisticLine text={'neutral'} value={values[1]}/>
    <StatisticLine text={'negative'} value={values[2]}/>
    <StatisticLine text={'TOTAL:'} value={values[3].total}/>
    <StatisticLine text={'AVERAGE:'} value={values[3].average}/>
    <StatisticLine text={'POSITIVE:'} value={values[3].posPerc}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  if(text === 'POSITIVE:')
    return <p>{text} {value}%</p>
  return <p>{text} {value}</p>
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
  }
  
  const values = [pos, neu, neg, stat]

  return(
    <>
    <Header header={'Give Feedback'} />
    <Button handleClick={handlePositive} text={'Positive'} />
    <Button handleClick={handleNeutral} text={'Neutral'} />
    <Button handleClick={handleNeg} text={'Negative'} />
    <Header header={'Statistics'} />
    <Statistics values={values} />
    </>
  )
}

export default App