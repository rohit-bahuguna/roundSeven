import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useData } from './contexts/dataContext'
import { CiLocationOn } from 'react-icons/ci'

const Country = () => {
    const { continentId, continent } = useParams()
    const { tripData } = useData()

    const filteredCountries = tripData.filter(continent => continent.id == continentId)
    return (
        <div className='flex mt-10 justify-center text-center h-screen'>

            <div className='flex flex-col gap-10'>
                <h1 className='text-4xl font-semibold'>Top Countries in {continent} for your next holiday</h1>
                <div className='flex gap-10'>
                    {

                        filteredCountries[0].countries && filteredCountries[0].countries.map(({ name, id, image }) => {
                            return <Link to={`/destinations/${name}/${continentId}/${id}`}>
                                <div key={id} className='w-96  relative '>
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

export default Country