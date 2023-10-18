import CardList from "./CardList";
import { useState } from "react";
import React from "react";

function Card ({item, count, setCount}) {

    
    const countAdd = () => setCount(count+1);

    return (
        
           <>
           
<div className="section-one">
    <article key={item.id} >
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <img className="image" src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <p>{item.category}</p>
          <button onClick={countAdd}>Ajouter au Panier</button>
          <p>{count}</p>
    </article>
   
</div>
    </>
        
    )
}

export default Card;

/*
import React from 'react';
import data from '../server/data';


class Home extends React.Component {
render() {
    return (
        <section id="home">
            <div className="content">
                <p>Test...</p>
            </div>
        </section>
    );
  }
} */ 