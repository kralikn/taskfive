import './App.css';
import { useState, useEffect } from 'react';
import Hotel from './components/Hotel';
import LoadingMask from './components/LoadingMask';

const App = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('api/hotels')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])

  console.log(data)

  return (
    <div className="App">
      
      <h1>Hotels</h1>
      {!data ? <LoadingMask /> : data.map(hotel => {
        // console.log(hotel)
        return <Hotel key={hotel.id} hotel={hotel} />
      })}
    </div>
  )
}

export default App
