import React, { Component, useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  
  async function req() {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data))
  }

  useEffect(() => {
    req()
  }, [])  
  
  return(
    <div>
      <h1 className="text-3xl bg-orange-500 text-center font-bold underline">Listar os Paineis</h1>
      {data.map(card => (
            <div //posts
            className='grid gap-0.5'
            >  
              <div //post
              key={card.id} 
              className="p-1.5 m-2 w-50 h-50 bg-slate-500">
                <h2 //post title
                className='font-bold text-xl'>
                  {card.title}
                </h2>
                <p //post body
                className='text-m'>
                  {card.body}
                </p>
              </div>
            </div> 
        ))}
    </div>
  );
}

export default App
