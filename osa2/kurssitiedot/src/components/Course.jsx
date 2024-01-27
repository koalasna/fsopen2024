const Course = ({course}) => {
    return (
        <>
            <Header text={course.name}/>
            <Content course={course.parts}/>
        </>
    );
};

const Header = ({text}) => <h2>{text}</h2>

const Content = ({course}) => {
    return(
    <>
        {course.map(course => 
            <Part key={course.id} 
            name={course.name} 
            ex={course.exercises}/>)
        }
     </> 
    )
}

const Part = ({name, ex}) => <p>{name} {ex}</p>


export default Course;