import React from 'react'

const Zeronew = () => {
  return (
    <>
    <div className='zero'>
  <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-7'>
        <h1 data-aos='fade-right'>We value our customers</h1>
        <p data-aos='fade' data-aos-delay='300'>
          Welcome to our amazing shop, where virtually everything is sold
        </p>
        <button className='btn btn-outline-primary btn-lg' data-aos='fade-up'>
          Create an account
        </button>
      </div>
      <div className='col-12 col-md-5' data-aos='fade-left' data-aos-delay='400'>
        <img src={BANNER} alt="Shop banner" className="img-fluid" />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Zeronew