import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import Profile from '../pages/Profile';
import { getProfile } from '../functions/user';
import mockAxios from '../../__mocks__/axios'; 

jest.mock('../functions/user', () => ({
  getProfile: jest.fn(),
}));

describe('Profile component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders profile data correctly on successful API call', async () => {
    getProfile.mockResolvedValueOnce({
      data: {
        avatar: 'https://i.pravatar.cc/300',
        name: 'John',
        email: 'john@mail.com',
      },
    });

    const mockProfileData = {
      data: {
        avatar: 'https://i.pravatar.cc/300',
        name: 'John',
        email: 'john@mail.com',
      },
    };

    getProfile.mockResolvedValueOnce(mockProfileData);

    const { getByText, getByAltText } = render(<Profile />);

    await waitFor(() => {
      expect(getProfile).toHaveBeenCalledWith('mockedToken');
    });

    expect(getByAltText('User Avatar')).toHaveAttribute(
      'src',
      'https://i.pravatar.cc/300'
    );
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('john@mail.com')).toBeInTheDocument();
  });

  it('handles logout button click', async () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    getProfile.mockResolvedValueOnce({
      data: {
        avatar: 'https://i.pravatar.cc/300',
        name: 'John',
        email: 'john@mail.com',
      },
    });
    const { getByText } = render(<Profile />);

    fireEvent.click(getByText('Logout'));

    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(getProfile).toHaveBeenCalledWith('mockedToken');
  });
});