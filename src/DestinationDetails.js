import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from './contexts/dataContext'

const DestinationDetails = () => {
    const { destinationName, continentId, countryId, destinationId
    } = useParams()

    const { tripData } = useData()

    const destinationDEtails = tripData.filter(continent => continent.id == continentId)[0].countries.filter((country) => country.id == countryId)[0].destinations.filter(destination => destination.id == destinationId)[0]
    return (
        <div>
            <h1>{destinationDEtails.name}</h1>
            <div className='flex justify-between gap-10 w-[80%]'>
                <img src={destinationDEtails.image} className='w-96' />

                <div className='flex flex-col gap-5'>
                    <span>{destinationDEtails.description}</span>
                    <span>{destinationDEtails.rating}</span>

                    <span>{destinationDEtails.reviews}</span>

                    <span>{destinationDEtails.location}</span>

                    <span>{destinationDEtails.opening}</span>

                    <span>{destinationDEtails.price}</span>






                </div>
            </div>

        </div>
    )
}

export default DestinationDetails