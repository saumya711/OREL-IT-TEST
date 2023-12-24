import React, {useState} from 'react';
import { Input, Menu } from 'antd';
import { UserOutlined, SearchOutlined, RightOutlined, AppstoreFilled,  } from '@ant-design/icons';
import Logo from '../assests/logo.png';
import OrangeLogo from '../assests/orange.png'
import { Link } from 'react-router-dom';

const { Item } = Menu;

const Header = () => {
  const [ current, setCurrent] = useState('home');

  const imageStyle = {
    width: '50%',
    height: '100%',
  }

  const handleClick = (e) => {
    setCurrent(e.key);
  }

  return (
    <div className='container-fluid'>
      <div className='row p-3'>
        <div className='col-md-3'>
          <img className='p-1' src={Logo} style={imageStyle}/>
        </div>
        <div className='col-md-6'>
          <Input
            prefix={<SearchOutlined className="site-form-item-icon" />}
            placeholder='Type and hit enter or select.....'
          />
        </div>
        <div className='col-md-3 float-right'>
          <Link to={`/prfile`}>
            <UserOutlined />
          </Link>
        </div>
      </div>
      <div className='row p-3'>
        <div className='col-md-3'>
          <button className='btn' style={{ backgroundColor: 'red', color: 'white'}}>
            <AppstoreFilled /> All Categories <RightOutlined className='float-right'/>
          </button>
        </div>
        <div className='col-md-6'>
          <Menu mode="horizontal">
            <Item>Flash Deals</Item>
            <Item>Special Offers</Item>
            <Item>Brands</Item>
            <Item>Sell On Orel Buy</Item>
          </Menu>
        </div>
        <div className='col-md-3 float-right'>
          <span className='h6'>
            Powered By
            <img className='p-1' src={OrangeLogo} style={imageStyle}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
