import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategories( [...categories, 'Halo'] );
  //   setCategories( categories => [...categories, 'Halo'] );
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      {/* <button onClick={ handleAdd }>Agregar</button> */}

      <ol>
        { 
          // categories.map( category => {
          //   return <li key={ category }>{ category }</li>;
          // })
          categories.map( category => (
            <GifGrid 
              category={ category }
              key={ category }
            />
          ))
        }
      </ol>
    </>
  );
};
