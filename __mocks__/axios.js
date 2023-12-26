
const mockAxios = jest.createMockFromModule('axios');

mockAxios.get = jest.fn(() =>
  Promise.resolve({
    data: {
      avatar: 'https://example.com/avatar.jpg',
      name: 'John Doe',
      email: 'john@example.com',
    },
  })
);

export default mockAxios;
