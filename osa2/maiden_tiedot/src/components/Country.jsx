
const Country = ({details}) => {
    const langs = []
   Object.values(details.languages).forEach(l => langs.push(l))
    return (
        <div>
            <h2>{details.name.common}</h2>
            <p>Capital: {details.capital}</p>
            <h3>Languages: </h3>
            <ul>
                {langs.map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={details.flags.png} alt={details.flags.alt}></img>
        </div>
    )
}

export default Country
