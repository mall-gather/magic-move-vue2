//set 
export function setToken(TokenKey, token) {
  return window.localStorage.setItem(TokenKey, token)
}

// get
export function getToken(TokenKey) {
  return window.localStorage.getItem(TokenKey)
}

// remove
export function removeToken(TokenKey) {
  return window.localStorage.removeItem(TokenKey)
}