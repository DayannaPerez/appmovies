import React from 'react'
import styles from './Search.module.scss'

const Search = ({query, setQuery, onUserClick}) => {
 const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('')
  }

  return (
    <div className={styles.container}>
    <input
        type="text"
        name={query}
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" onClick={onUserClick}>Search</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Search