import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from './Detail';

// 4ryTHzs01aBAKJ1hGpQbWDCU7LzGori6

// 5ae2e3f221c38a28845f05b63ab7962a5f0ea11601b59442b5b8d4cc


const Main = () => {
  const params = useParams();
  const [place, setPlace] = useState({})
  console.log({ place });

  const getPlace = (name) => {
    axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${name}&apikey=5ae2e3f221c38a28845f05b63ab7962a5f0ea11601b59442b5b8d4cc`)
    .then(res => setPlace(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getPlace(params.name)
  }, [params.name])

  return (
    <div>
      <Detail place={place} />
    </div>
  )
}

export default Main
