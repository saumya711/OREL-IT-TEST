import React from 'react';

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <nav className='pt-2 p-1 d-flex justify-content-between bg-danger'>
        <div>
          <p className='text-white text-bold'>Welcome to Orel Buy</p>
        </div>
        <div>
          <button className='btn mx-2 text-white'>Login</button>
          <button className='btn text-white'>Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
