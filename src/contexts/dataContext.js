import { createContext, useContext, useState } from 'react';
import { data } from '../utils/data';

const DataContext = createContext();

const DataProvider = ({ children }) => {


    const [tripData, setTripData] = useState(data);


    return (
        <DataContext.Provider
            value={
                { tripData }
            }>
            {children}
        </DataContext.Provider>
    );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };