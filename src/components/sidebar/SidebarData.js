import React from 'react';
import { 
    DollarOutlined, 
    EditOutlined, 
    HeartOutlined, 
    PlusOutlined, 
    ShoppingOutlined, 
    StarOutlined, 
    UserAddOutlined, 
    UserOutlined, 
    WalletOutlined 
} from '@ant-design/icons';

export const DashboardData = [
  {
    key:'1',
    title: 'My Orders',
    icon: <ShoppingOutlined />,
    cName: 'nav-text'
  },
  {
    key:'2',
    title: 'My Refunds',
    icon: <DollarOutlined />,
    cName: 'nav-text'
  },
  {
    key:'3',
    title: 'My Reviews',
    icon: <StarOutlined />,
    cName: 'nav-text'
  },
  {
    key:'4',
    title: 'My Wishlist',
    icon: <HeartOutlined />,
    cName: 'nav-text'
  },
  {
    key:'5',
    title: 'My Merchants',
    icon: <PlusOutlined />,
    cName: 'nav-text'
  }
];

export const AccountSettingsData = [
    {
      key:'6',
      title: 'My Addressbook',
      icon: <UserOutlined />,
      cName: 'nav-text'
    },
    {
      key:'7',
      title: 'My Wallet',
      icon: <WalletOutlined />,
      cName: 'nav-text'
    },
    {
      key:'8',
      title: 'Edit My Profile',
      icon: <UserAddOutlined />,
      cName: 'nav-text'
    },
    {
      key:'9',
      title: 'Change Password',
      icon: <EditOutlined />,
      cName: 'nav-text'
    }
];