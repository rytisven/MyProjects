import React from 'react';
import Weather from './Weather'





const Countries = ({filteredCountries, setNewSearch}) =>{
    const countriesList =  filteredCountries.map((country)=>{
            return (
                <div key={country.name}>
                    <img src={country.flag} width="25" alt={country.name} ></img>
                    {country.name}
                    <button onClick={()=>{setNewSearch(country.name)}}>view</button>
                </div>
            )
        })
    
    const countryToShow =  filteredCountries.map((country)=>{
            const languages = country.languages.map(language => language.name)
        
            return(
               <div key={country.name}>
                    <a onClick={()=>{setNewSearch('')}} className="close"></a>
                    <h1>{country.name}</h1>
                    <img src={country.flag} width="250" alt={country.name}></img>
                    <p><strong>Capital: </strong>{country.capital}</p>
                    <p><strong>Population: </strong>{country.population}</p>
                    <p><strong>Spoken languages: </strong>{languages.join(', ')}</p>
                    <Weather location={country.capital}/>
                </div>
            )
        })


    if(filteredCountries.length > 1 && filteredCountries.length <= 25  ) {
        return (
            <div className="countries-div">
                {countriesList}
            </div>
        )
    } else if (filteredCountries.length === 1) {
        return (
            <div className="countries-div">
                {countryToShow}
            </div>    
        )
    } else {
        return (    
            null
        )
    }  
  }

export default Countries