import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//Esta pagina renderizarÃ¡ cada bebida de manera individual

const Beer = () => {
    const navegate= useNavigate()
    const [beer, setBeer] = useState([])
    const params = useParams()

    const url =  `https://api.punkapi.com/v2/beers/${params.id}`



    // const getBeer = async()=>{
    //     const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
    //     const data = await res.json()
    //     setBeer(data[0])
    // }

    // useEffect(()=>{
    //     getBeer()
    // }, [])
  

useEffect( () => {
    const fetchData = async () => {
        const res = await axios(url)
        setBeer(res.data[0])
    }
    fetchData()
},[])



  
  console.log(beer)
  return (
    <div>
        <h2>Cerveza numero...</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={()=>navegate(-1)}>Go back</button>
    </div>

  )
}

export default Beer