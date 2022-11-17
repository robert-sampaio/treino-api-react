import React, { useEffect, useMemo, useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const [busca, setBusca] = useState('');

  const cardsFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return data.filter((card) => card.title.toLowerCase().includes(lowerBusca))
  }, [busca]);
  
  async function req() {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data))
  } 

  useEffect(() => {
    req()
  }, [])  
  
  return(
    <div>
      <h1 
      className="text-3xl bg-orange-500 text-center font-bold underline">
        Listar os Paineis
      </h1>

      <input 
      className='w-screen text-center'
      type='text' 
      value={busca}
      placeholder='O que você procura?'
      onChange={(e) => setBusca(e.target.value)} 
      />
      <div className='
      grid grid-cols-3 justify-items-center
      '>
        {(busca == '' ? data : cardsFiltrados).map(card => (
                <div //post
                key={card.id} 
                className="p-4 m-2 w-80 h-64 bg-slate-500">
                  <h2 //post title
                  className='font-bold text-xl'>
                    {card.title}
                  </h2>
                  <p //post body
                  className='text-m'>
                    {card.body}
                  </p>
                </div>
          ))}
        </div>
    </div>
  );
}

export default App
