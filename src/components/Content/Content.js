import React from 'react'
import styles from './Content.module.scss'

const Content = ({ searchedMovies }) => {
  return (
    <div className={styles.container}>
      {searchedMovies?.map((movie) => {
        return (
        <div className={styles.card}>
          <img alt={movie.Title} src={movie.Poster}></img>
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Content