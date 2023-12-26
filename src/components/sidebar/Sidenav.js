import React from 'react';
import { Menu } from 'antd';
import { DashboardData, AccountSettingsData } from './SidebarData';
import { Link } from 'react-router-dom';

const { Item } = Menu;

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
