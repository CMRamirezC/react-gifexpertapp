// import React, { useState, useEffect } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [count, setCount] = useState(0);
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs( category );

  

  // useEffect(() => {
  //   getGifs(category)
  //     .then( setImages );
  // }, [ category ]); // [] === domponen did mount, Cuando se asigna una lista de dependencias vacias, lo que se encuentra dentro de useEffect solo se ejecuta cuando se renderiza el componente por primera vez

  // const getGifs = async () => {
  //   const url =
  //     `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=KG3cQQzyTqKQUQwyI33Nlmh2AfndiFE3`
  //   const result = await fetch(url);
  //   const { data } = await result.json();

  //   const gifs = data.map((img) => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       url: img.images?.downsized_medium.url,
  //     };
  //   });

  //   console.log(gifs);
  //   setImages(gifs);
  // };

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      { loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid"> 
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}

        {/* <ol>
        {
          images.map( ({id, title}) => (
            <li key={ id }>{ title }</li> 
          ))
        }
      </ol> */}
        {/* <h3>{ count }</h3>
      <button onClick={() => setCount(count + 1)}> add </button> */}
      </div>
    </>
  );
};
