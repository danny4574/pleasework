import React from 'react'
import Latestcolltion from '../latestcollection/Latestcolltion'
import Bestseller from '../commonfiles/Bestseller'
import Zero from '../herosection/Zero'
import Newletter from '../forms/Newletter'

const Home = () => {
  return (
    <div>
      <Zero/>
      <Latestcolltion/>
      <Bestseller/>
      <Newletter/>
      
    </div>
  )
}

export default Home