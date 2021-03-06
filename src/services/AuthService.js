import decode from 'jwt-decode';
const ID_TOKEN_KEY = 'id_token';

export function login() {

}

export function logout() {
  clearIdToken();
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {

  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function setIdToken(token) {
  localStorage.setItem(ID_TOKEN_KEY, token);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken;
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { 
    return null; 
  }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
