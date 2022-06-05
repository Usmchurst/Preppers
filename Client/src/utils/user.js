export const getMe = (token) => {
  return fetch('http://localhost:3001/home/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};