import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Country from './Country';
import Destinations from './Destinations';
import DestinationDetails from './DestinationDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/country/:continent/:continentId' element={<Country />} />
        <Route path='/destinations/:countryName/:continentId/:countryId' element={<Destinations />} />
        <Route path='/destination/:destinationName/:continentId/:countryId/:destinationId' element={<DestinationDetails />} />

      </Routes>
    </div>
  );
}

export default App;
