import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useData } from './contexts/dataContext'
import { CiLocationOn } from 'react-icons/ci'

const Destinations = () => {
    const { continentId, countryName, countryId } = useParams()
    const { tripData } = useData()

    const filteredDestinations = tripData.filter(continent => continent.id == continentId)[0].countries.filter((country) => country.id == countryId)[0].destinations
    console.log(filteredDestinations)
    return (
        <div className='flex mt-10 justify-center text-center h-screen'>

            <div className='flex flex-col gap-10'>
                <h1 className='text-4xl font-semibold'>Top destinations in {countryName} for your next holiday</h1>
                <div className='flex gap-10'>
                    {

                        filteredDestinations && filteredDestinations.map(({ name, id, image }) => {
                            return <Link to={`/destination/${name}/${continentId}/${countryId}/${id}`}>
                                <div key={id} className='w-64  relative '>
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

export default Destinations