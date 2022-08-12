import React, { useState } from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'
import Title from '../Title/Title'
import styles from './Main.module.scss'

const axios = require('axios').default;

const Main = () => {
 const [query, setQuery] = useState("");
 const [results, setResults] = useState(null);

 const getMoviesData = () => {
  // cuando el user hace click en buscar
  // hago axios a la api de las peliculas
  // con el nombre buscado (esta guardado en query)
  axios.get(`http://www.omdbapi.com/?s=${query}&apikey=73157ade`)
	.then(response => setResults(response.data.Search))
  .catch(err => console.log(err));
 }

 const handleClearResults = () => {
  setResults(null)
  setQuery('')
 }

  return (
    <div className={styles.container}>
        <Title />
        <Search 
        query={query} 
        setQuery={setQuery} 
        onUserClick={getMoviesData}
        />
        <Content searchedMovies={results}/>
        {results ? (
          <button
          type="button" 
          onClick={() => handleClearResults()}
          >
            Clear
          </button>
        ) : null}
    </div>
  )
}

export default Main