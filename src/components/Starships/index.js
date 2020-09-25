import React, {useState, useEffect} from 'react';

export default function Starships({starships}) {
const [images, setImages] = useState([]);
const key = "FrqemiqpY2OD-nKS4aJNjOfbbLYRyoJ4GMunT0o4NA0";
const names =  [...starships.map(el=>el.name)];
console.log(names)

const test2 = ["CR90 corvette", "Star Destroyer", "Sentinel-class landing craft", "Death Star", "Millennium Falcon", "Y-wing", "X-wing", "TIE Advanced x1", "Executor", "Rebel transport"]

useEffect(()=>{
  
  function getPhotos(shipName){
    fetch("https://api.unsplash.com/search/photos?page=1&per_page=1&query="+shipName+"&client_id="+key)
      .then(res=>res.json())
      .then(res=> setImages((prev)=>([
        ...prev,
        ...res.results,
    ])))
  }
  
   console.log([...starships.map(el=>el.name)])//.map(el=>getPhotos(el)); 
}, [])

  return (
    <div>
      <ul>
         {images.length>0?images.map(image=><li key={image.id}><img src={image.urls.small} /></li>):'loading content'}
      </ul>
    </div>
  )
}

