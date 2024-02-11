import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryLi from './components/CountryLi';
import Country from './components/Country';

const App = () => {
  const [filter, setFilter] = useState('')
  const [toShow, setToShow] = useState(null)
  const [countries, setCountries] = useState([])
  const [nameList, setNameList] = useState([])

  //alustus
  useEffect(() => {
    console.log('alustetaan countries')
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        setCountries(res.data)
        setNameList(res.data.map(c => c.name.common))
      })
  }, []) 

   //kun 'filter'-tila muuttuu:
  useEffect(() => {
    filter
    ? setToShow(nameList.filter(c => c.toLowerCase().includes(filter)))
    : setToShow(null)    
  }, [filter]) 

  const whatToShow = () => {
    if(toShow === null){ //eli jos tyhjä meidän toShow-taulukko
      return(
        <p>Please type what to filter countries by..</p>
      )
    } else if(1 < toShow.length && toShow.length <= 10) { // 1-10 vaihtoehtoa kerrallaan
      return(
        <ol>
          {toShow.map(c => <CountryLi key={c} name={c} />)}
        </ol>
      )
    } else if(toShow.length === 1){   // kun vain yksi maa näytettävänä
      let details = countries.find(c => c.name.common === toShow[0])
      return(
        <Country details={details} />
      )
    }

    return(
      <p>Too many countries to show. Keep typing!</p>
    )
  }

  return (
    <>
      find countries: <input value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} /> 
        {whatToShow()}
    </>
  );
};

export default App;