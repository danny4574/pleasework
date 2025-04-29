import React, {useEffect} from 'react'
import BANNER from '../../assets/theone.jpg'
import './hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Zero = () => {
     
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
            easing:'ease-in-out'
        });
    },[])
  return (
    <div className='zero'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <h1 data-aos='fade-right'>We value our coustmers</h1>
                    <p data-aos='fade 'data-aos-delay='300'>welcome to our amazing shop, where virtually everthing is sold</p>
                    <button className='btn btn-outline-primary btn-lg' data-aos='fade-up'> create an account</button>
                </div>
                <div className='col-md-5' data-aos='fade-left'data-aos-delay='400'>
                   <img src={BANNER} alt="" />
                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Zero