import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Contact from './components/Contact'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [consToShow, setConsToShow] = useState([])

  useEffect(() => {
    contactService
      .getAll()
        .then(initialContacts =>
          setPersons(initialContacts)
        )
        .catch(e => 
          console.log('Virhe yhteystietojen haussa'))
  }, [])

  const handleSubmit = (event) =>{
    event.preventDefault()
    const addName = {
      name: newName,
      number: newNumber
    }

    if(!(persons.map(p=>p.name).includes(addName.name))){
      contactService
        .create(addName)
          .then(createdContact =>
            setPersons(persons.concat(createdContact)))
          .catch(e => 
            console.log('Virhe uutta yhteystietoa lisätessä'))
    } else if(window.confirm(`${addName.name} is already added to phonebook. Replace the old number with a new one?`)){
      const conToUpdate = persons.find(p => p.name === addName.name)
      contactService
        .update(conToUpdate.id, addName)
          .then(updatedContact =>
              setPersons(persons
                .filter(p => p.name !== conToUpdate.name)
                .concat(updatedContact)))
          .catch(e => 
            console.log('Virhe yhteystietoa muokatessa'))
    }

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
      setConsToShow(persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }
  }

  const handleDelOf = person => {
    if(window.confirm(`Do you want to remove ${person.name} from contacts?`))
    contactService
      .remove(person.id)
        .then(deletedContact => 
            setPersons(persons.filter(p => p.id !== deletedContact.id)))
        .catch(e =>
          console.log('Virhe poistettaessa yhteystietoa'))
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
          <Contact key={p.name} name={p.name} num={p.number} handleDelete={()=>handleDelOf(p)}/>)
        : consToShow.map(p => 
          <Contact key={p.name} name={p.name} num={p.number} handleDelete={()=>handleDelOf(p)}/>)}
      </ul>
    </div>
  )

}
export default App