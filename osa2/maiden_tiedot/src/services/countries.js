import axios from 'axios'

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const req = axios.get(baseURL+'/all')
    return req.then(res => res.data)
}

const getOne = (countryName) => {
    const req = axios.get(`${baseURL}/name/${countryName}`)
    return req.then(res => res.data)
}
    

export default {getAll, create, update, remove}