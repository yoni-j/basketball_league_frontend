import { isEmpty } from 'lodash-es'
import { proxyWithComputed } from 'valtio/utils'


function getAuthUser() {
    let user = window.localStorage.getItem('user')
    if (!user) return {}
    user = JSON.parse(user)
    return user
}


const state = proxyWithComputed(
  {
    authUser: getAuthUser(),
  },
  {
    isAuth: (snap) => !isEmpty(snap.authUser),
    isCoach: (snap) => !isEmpty(snap.authUser) && snap.authUser.is_coach
  }
)

export default state