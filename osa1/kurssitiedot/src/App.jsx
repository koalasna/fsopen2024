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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header header = {course} />
      <Content part1 = {part1.name} 
          part2 = {part2.name} 
          part3 = {part3.name} 
          exercises1={part1.exercises} 
          exercises2 = {part2.exercises} 
          exercises3 = {part3.exercises} />      
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

export default App