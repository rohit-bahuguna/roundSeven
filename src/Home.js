import React from 'react'
import { useData } from './contexts/dataContext'
import { CiLocationOn } from "react-icons/ci"
import { Link } from 'react-router-dom'
const Home = () => {

    const { tripData } = useData()
    return (
        <div className='  flex mt-10 justify-center text-center h-screen'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-bold'>Welcome To Trip Advisor</h1>
                <h2 className='text-3xl text-indigo-700 font-semibold'>Top Continents for yout next holiday</h2>
                <div className='flex gap-10 '>
                    {
                        tripData && tripData.map(({ name, image, id }) => {
                            return <Link to={`country/${name}/${id}`}>
                                <div key={id} className='w-96 relative '>
                                    <img src={image} className='rounded-2xl' />
                                    <span className='absolute bottom-5 text-white font-semibold left-5 '> <CiLocationOn className='inline mr-1' /> {name}</span>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home