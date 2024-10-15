import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    return (
        <div className='py-4'>
            <h1 className='text-white'>{title}</h1>
            <div className='flex'>
                {
                    movies?.map((movie) => {
                        return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    })
                }
            </div>
        </div>
    )
}

export default MovieList
