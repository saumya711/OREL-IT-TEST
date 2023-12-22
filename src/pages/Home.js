import React from 'react';
import Sidenav from '../components/Sidenav';

const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <Sidenav />
          </div>
          
          <div className='col-md-10'>
            <h4>Home Page</h4>
          </div>
        </div>
    </div>
  )
}

export default Home
