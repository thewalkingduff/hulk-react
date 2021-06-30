import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    async function getData() {
      const api = 'https://gateway.marvel.com/v1/public/characters?name=hulk&ts=1&apikey=d832b399dbb6f81d7a7a1c331467d90b&hash=8194cabb24e7c3f11f54b8dca39c955a'
      const result = await fetch(api)
      const getResult = await result.json()
      setData(getResult.data.results[0])
      setLoaded(true)
    }
    getData()
  }, [])

  console.log(data)

  return (<>
    <h1>HULK COMIC BOOKS!</h1>

    <div key={data.id} className='container-comics'>
      {data && data.comics && data.comics.items.map((comic, i) =>
        <div key={i} className="comic-books">
          <a href={data.urls[0].url} target="_blank">
            <img src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`} />
          </a>
          <h3>{comic.name}</h3>
          <p>{data.description}</p>
        </div>
      )}
    </div>


  </>)
}

export default App;
