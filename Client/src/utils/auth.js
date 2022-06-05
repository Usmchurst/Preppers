import decode from 'jwt-decode';

class AuthService {
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }
  // check if user's logged in
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // logs user out
  logout() {
    localStorage.removeItem('token');
    window.location.assign('/home');
  }
}

export default new AuthService();
