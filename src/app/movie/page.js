import Link from 'next/link'
import React from 'react'
import Moviecard from '../component/Moviecard';
import styles from '@/app/styles/common.module.css'


const MovieList = async() => {

  const url = process.env.netflix_key;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ecf6a54164msh4f0face8ef9e0b5p172545jsndcfa1c966c02',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};                                  

  const res  = await fetch(url, options);
  const data = await res.json();
  const movies = data.titles;
  // console.log('fetched data ',movies);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movie Page</h1>
          <div className={styles.card_section}>
          {
            movies.map((movie)=>{
              return <Moviecard key={movie.id} {...movie} />
            })
          }
          </div>
          
        </div>
      </section>
        
    </>
  )
}

export default MovieList