import React from 'react';
import { Menu } from 'antd';
import { DollarOutlined, EditOutlined, HeartOutlined, PlusOutlined, ShoppingOutlined, StarOutlined, UserAddOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const Sidenav = () => {
  return (
    <Menu mode='vertical'>
      <Item key="home" className='h6'>
        DASHBOARD
      </Item>
      <SubMenu 
        key='1' 
        title={
          <span>
            <ShoppingOutlined /> My Orders
          </span>
        }
      />
      <SubMenu 
        key='2' 
        title={
          <span>
            <DollarOutlined /> My Refunds
          </span>
        }
      />
      <SubMenu 
        key='3' 
        title={
          <span>
            <StarOutlined /> My Reviews
          </span>
        }
      />
      <SubMenu 
        key='4' 
        title={
          <span>
            <HeartOutlined /> My Wishlist
          </span>
        }
      />
      <SubMenu 
        key='5' 
        title={
          <span>
            <PlusOutlined /> My Merchants
          </span>
        }
      />

      <Item key="account-settings" className='h6'>
        ACCOUNT SETTINGS
      </Item>
      <SubMenu 
        key='6' 
        title={
          <span>
            <UserOutlined /> My Addressbook
          </span>
        }
      />
      <SubMenu 
        key='7' 
        title={
          <span>
            <WalletOutlined /> My Wallet
          </span>
        }
      />
      <SubMenu 
        key='8' 
        title={
          <span>
            <UserAddOutlined /> Edit My Profile
          </span>
        }
      />
      <SubMenu
        key='9' 
        title={
          <span>
            <EditOutlined /> Change Password
          </span>
        }
      />
    </Menu>
  )
}

export default Sidenav
