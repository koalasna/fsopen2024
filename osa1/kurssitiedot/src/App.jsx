const Header = (props) => (
  <h1>{props.header}</h1>
)

const Content = (props) => (
  <p>{props.part} {props.ex}</p>
)

const Total = (props) => (
  <p>Number of exercises: {props.ex1+props.ex2+props.ex3}</p>
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
      <Content part = {part1} ex = {exercises1} />
      <Content part = {part2} ex = {exercises2} />
      <Content part = {part3} ex = {exercises3} />
      
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App