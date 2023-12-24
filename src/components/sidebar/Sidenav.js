import React from 'react';
import { Menu } from 'antd';
import { DollarOutlined, EditOutlined, HeartOutlined, PlusOutlined, ShoppingOutlined, StarOutlined, UserAddOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';
import { DashboardData, AccountSettingsData } from './SidebarData';
import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

const Sidenav = () => {
  return (
    <Menu mode='vertical'>
      <Item>DASHBOARD</Item>
        {DashboardData.map((item) => {
          return (
          <Item key={item.key}>
              <Link>
              {item.icon}
              <span>{item.title}</span>
              </Link>
          </Item>
          );
        })}
  
      <Item>
        ACCOUNT SETTINGS
      </Item>
      {AccountSettingsData.map((item) => {
        return (
        <Item key={item.key}>
          <Link>
          {item.icon}
          <span>{item.title}</span>
          </Link>
        </Item>
        );
      })}
    </Menu>
  )
}

export default Sidenav
