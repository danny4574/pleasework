import React from 'react'
import Newcollection from '../../assets/Newcollection'
import Card from '../commonfiles/Card'
import './latestcollection.css'

const Latestcolltion = () => {
  return (
    <div>
         <div className='new_collection'>
            <h1> Latest collection</h1>
            
            <p> Explore our latest collection across variety of item</p>
            <hr />
            <div className='collection'>
                {Newcollection.map(( card ,i)=>{
                    return<Card key={i} id={card.id} name={card.name} img={card.img}new_price={card.new_price}old_price={card.old_price}/>
                })}

            </div>

         </div>
    </div>
  )
}

export default Latestcolltion