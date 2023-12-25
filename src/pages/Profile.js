import React, {useState, useEffect} from 'react';
import { getProfile } from '../functions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'antd';
import Sidenav from '../components/sidebar/Sidenav';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('https://i.pravatar.cc/300');

  const { user } = useSelector((state) => ({ ...state}));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile(user.token)
    .then((res) => {
      console.log("User Profile",res.data);
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
    dispatch({
      type: "LOGOUT",
      payload: null, 
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
