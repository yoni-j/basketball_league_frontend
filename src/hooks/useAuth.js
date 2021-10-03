import axios from 'axios'
import { useSnapshot } from 'valtio'
import auth from '../auth'

function login(user) {
  auth.user = user
  window.localStorage.setItem('user', JSON.stringify(user))
  axios.defaults.headers.common.Authorization = `Bearer ${user.access}`
}

function logout() {
  window.localStorage.removeItem('user')
}

function useAuth() {
  const snap = useSnapshot(auth)

  return {
    ...snap,
    login,
    logout
  }
}

export default useAuth