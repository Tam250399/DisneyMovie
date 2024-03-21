import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreIds();
    }, [])


    const getMovieByGenreIds = () => {
        GlobalAPI.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results)
        })
    }
    const sliderRight = (element) => {

        element.scrollLeft += 500

    }
    const sliderLeft = (element) => {

        element.scrollLeft -= 500
    }
    return (
        <div className='relative'>
            <HiChevronLeft className={`hidden md:block text-white text-[50px] absolute  cursor-pointer p-2 z-10  ${index_ % 3 == 0 ? 'mt-[50px]' : 'mt-[150px]'}`} onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className={` hidden md:block text-white text-[50px] absolute  cursor-pointer right-0 top-0  p-2 z-10 ${index_ % 3 == 0 ? 'mt-[50px]' : 'mt-[150px]'}`} onClick={() => sliderRight(elementRef.current)} />
            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth
            '>
                {movieList.map((items) => (
                    <div key={items.id}>
                        <>
                            {index_ % 3 == 0 ? <HrMovieCard movie={items} /> : < MovieCard movie={items} />}
                        </>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default MovieList