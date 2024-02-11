
const CountryLi = ({name, handleClick}) => 
    <li> {name} <button onClick={() => handleClick(name)}>show more</button></li>

export default CountryLi;