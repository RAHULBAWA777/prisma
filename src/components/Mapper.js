import React from 'react'
import ImageMapper from 'react-img-mapper';
import img from '../images/map2.84a11b28f78f671f8866.jpg'
import '../App.css';
import A from '../components/list'

// const b = A.plots[0].coords;
const Mapper = () => {
  const URL = '../images/map2.84a11b28f78f671f8866.jpg'
  // console.log(b)
 const MAP = {
  name: "my-map",
  areas:  [
    { name: "1", shape: "poly", coords: [5763,2694,5827,2674,5862,2796,5800,2815], preFillColor: "green", fillColor: "blue"  },
    { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
    { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
    { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
    { name: "5", shape: "circle", coords: [170, 100, 25 ] },
  ]
}
  return (
    <ImageMapper src={URL} map={MAP}  height={760} width={1535}/>
  )
}

export default Mapper;