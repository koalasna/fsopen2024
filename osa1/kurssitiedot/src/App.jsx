const Header = (props) => (
  <h1>{props.header}</h1>
)

const Content = (props) => (
  <div>
    <Part part = {props.part1} ex = {props.exercises1} />
    <Part part = {props.part2} ex = {props.exercises2} />
    <Part part = {props.part3} ex = {props.exercises3} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises: {props.ex1+props.ex2+props.ex3}</p>
)

const Part = (props) => (
  <p>{props.part} {props.ex}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header = {course} />
      <Content part1 = {part1} 
          part2 = {part2} 
          part3 = {part3} 
          exercises1={exercises1} 
          exercises2 = {exercises2} 
          exercises3 = {exercises3} />      
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App