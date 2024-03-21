import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'


import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalgeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import starwarV from './../assets/Videos/star-wars.mp4'




function ProductionHouse() {


    const list = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: nationalG,
            video: nationalgeographicV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwar,
            video: starwarV
        },
    ]
    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
            {
                list.map((item) => (
                    <div key={item.id} className='border-[2px] border-gray-400 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer relative shadow-xl shadow-gray-600'>
                        <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 ' />
                        <img src={item.image} className='w-full z-[1]' />

                    </div>
                ))
            }
        </div>
    )
}

export default ProductionHouse