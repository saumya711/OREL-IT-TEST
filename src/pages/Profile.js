import React, {useState, useEffect} from 'react';
import { getProfile } from '../functions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'antd';
import Sidenav from '../components/sidebar/Sidenav';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import { removeToken } from '../actions/authActions';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('https://i.pravatar.cc/300');

  const { auth, user } = useSelector((state) => ({ ...state}));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile(auth.token)
    .then((res) => {
      setProfile(res.data);
      setAvatarUrl(res.data.avatar);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    })
  },[]);

  const handleLogout = () => {
    dispatch(removeToken());
    localStorage.removeItem('token');
    dispatch({
      type: "ADD_USER_INFO",
      payload: {
        email: null,
        name: null
      },
    });

    navigate("/");
  };

  return (
    <div className='container-fluid'>
      <Header />
      <div className='row'>
        <div className='col-md-2'>
          <div className='container'>
            <Sidenav />
          </div>
        </div>
        <div className='col-md-10'>
          <div className='container'>
            <button
              onClick={handleLogout} 
              className='text-center btn btn-primary btn-raised btn-blocked'
              style={{ position: 'absolute', top: '10px', right: '10%' }}
            >
              Logout
            </button>
            <div className='row justify-content-center align-items-center mb-4'>
              <Avatar 
                src={avatarUrl}
                loading={loading ? 'lazy' : 'eager'} 
                size={250} 
              />
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <h2 className='text-center'>{user.name}</h2>
                <p className='text-center'>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
