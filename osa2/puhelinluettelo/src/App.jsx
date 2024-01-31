import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Contact from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [consToShow, setConsToShow] = useState([])

  const handleSubmit = (event) =>{
    event.preventDefault()
    const addName = {
      name: newName,
      number: newNumber
    }

    persons.map(p=>p.name).includes(addName.name) 
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(addName))
    setNewName('')
    setNewNumber('')
  }

  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }

  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const onChangeFilter = (event) => {
    if(event.target.value === ''){
      setShowAll(true) 
    } else {
      setShowAll(false)
      setConsToShow(persons.filter(p => p.name.toLowerCase().includes(event.target.value)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={onChangeFilter}/>
      <h2>Add a concat</h2>
      <PersonForm 
        handleSubmit={handleSubmit} 
        newName={newName} 
        handleOnChange={handleOnChange}
        newNumber={newNumber}
        handleOnChangeNumber={handleOnChangeNumber} />
      <h2>Numbers</h2>
      <ul>
        {showAll 
        ? persons.map(p => 
          <Contact key={p.name} name={p.name} num={p.number} />)
        : consToShow.map(p => 
          <Contact key={p.name} name={p.name} num={p.number} />)}
      </ul>
    </div>
  )

}
export default App