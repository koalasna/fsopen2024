import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1232144' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    const addName = {
      name: newName,
      number: newNumber
    }
    const savedNames = persons.map(p=>p.name)

    savedNames.includes(addName.name) 
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnChange}/>
        </div>
        <div>
          phone number: <input value={newNumber} onChange={handleOnChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => 
          <Contact key={p.name} name={p.name} num={p.number} />)}
      </ul>
    </div>
  )

}

const Contact = ({name, num}) => <li>{name} - {num}</li>

export default App