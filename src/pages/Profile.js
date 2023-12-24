import React, {useState, useEffect} from 'react';
import { getProfile } from '../functions/user';
import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import Sidenav from '../components/sidebar/Sidenav';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state}));

  useEffect(() => {
    getProfile(user.token)
    .then((res) => {
      console.log("User Profile",res.data);
      setProfile(res.data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    })
  },[]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <div className='container'>
            <Sidenav />
          </div>
        </div>
        <div className='col-md-10'>
          <div className='container'>
            <button 
              className='text-center btn btn-primary btn-raised btn-blocked'
              style={{ position: 'absolute', top: '10px', right: '10%' }}
            >
              Logout
            </button>
            <div className='row justify-content-center align-items-center mb-4'>
              <Avatar 
                src={profile.avatar} 
                size={250} 
              />
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <h2 className='text-center'>{profile.name}</h2>
                <p className='text-center'>{profile.email}</p>
                <p className='text-center'>{profile.role}</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Profile
