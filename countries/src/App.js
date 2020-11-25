import React, { useState, useEffect } from 'react';
import {useTransition, animated} from 'react-spring'
import './App.css';
import axios from 'axios';

import Countries from './components/Countries'

const countriesAPI = "https://restcountries.eu/rest/v2/all"

const randomLocations = ["south america" , "europe", "africa", "north america" , "antarctica", "asia", "south east asia","Caribean", "australia","india"]
const nr  = Math.floor(Math.random() * randomLocations.length)


const  App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')
  const [fotos, setFotos] = useState(null)
  const [foto, setFoto]= useState({
    "url": "https://images.unsplash.com/photo-1507048048024-c5ee15959e36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MTk0Mn0",
    "id": "LKpV6UGPRkI",
    "user": "Maarten van den Heuvel"
  })

  const api_key_unsplash = process.env.REACT_APP_UNSPLASH
  const urlUnsplash = `https://api.unsplash.com/search/photos?query=${randomLocations[nr]}&client_id=${api_key_unsplash}&per_page=30`



  useEffect(() => {
    axios.get(urlUnsplash).then(res=>{
        const randomNr = Math.floor(Math.random() * 30)

        const pictures = res.data.results.map(picture => ({ url: picture.urls.regular,
                                                            id: picture.id,
                                                            user: picture.user.name    
                                                      })
                                               )
        const picture = {
                            "url": pictures[randomNr].url,
                            "id": pictures[randomNr].id,
                            "author": pictures[randomNr].user
                            }                                       
        setFotos(pictures)
        setFoto(picture)   
        })
  },[urlUnsplash])

  


useEffect(() => {
    axios.get(countriesAPI).then(response => {
      setCountries(response.data)
      })
  }, [])

useEffect(() => {
  const interval = setInterval(() => {
    if(filteredCountries.length === 1){
        getPicturesAcordingInput()
    }
    const randomNr = Math.floor(Math.random() * fotos.length)
    setFoto(fotos[randomNr])
  }, 10000);
  return () => {
    clearInterval(interval);
  };
})


const handleSearchChange = (event) => {  
    setNewSearch(event.target.value)
  }

const filteredCountries = countries.filter((country)=> {
    return country.name.toLowerCase().includes(newSearch.toLowerCase()) 
})


const  getPicturesAcordingInput = async () => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${filteredCountries[0].name}&client_id=${api_key_unsplash}&per_page=30`);
    const pictures = await response.data.results.map(picture => ({ url: picture.urls.regular,
                                                                    id: picture.id,
                                                                    user: picture.user.name    
                                                                })
    )
    setFotos(pictures)
  }


const transitions = useTransition(foto, item => item.id  , {
  from: {opacity: 0, transform: `scale(11)`},
  enter: {opacity: 1, transform: `scale(1)`},
  leave:{opacity:0, transform: `scale(0.9)`}
})

return transitions.map(({item, props, key})=>{
  return (
    <div key={key} className="App">
       <animated.div className="first" style={{
                                                "backgroundImage": `url(${item.url})`,
                                                "height": "auto",
                                                " zIndex": "-1" ,
                                                "minHeight": "100%",
                                                "minWidth": "1024px",
                                                "position": "fixed",
                                                ...props
                                                    }}>
                    <h5 className="author" style={{
                                                    "position":"fixed",
                                                    "bottom":"0",
                                                    "color":"white",
                                                    "zIndex": "0"
                                                 }}>{item.author}</h5>
                </animated.div>
        {filteredCountries.length === 1 ? null : <input className="Search-input" placeholder="Type the name of the country..." value={newSearch} onChange={handleSearchChange}/> }
        <Countries filteredCountries={filteredCountries} setNewSearch={setNewSearch} /> 
    </div>
  )
})
}
export default App;
