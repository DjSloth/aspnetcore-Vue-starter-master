import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import NotFound from 'components/not-found'
import UnAuthorized from 'components/un-authorized'
import Profile from 'components/user-profile'

import AuthService from './services/auth-service'
const auth = new AuthService()


export const routes = [
    { path: '*', name: '404', component: NotFound },
    { path: '/unauthorized', name: '403', component: UnAuthorized },
    {
        path: '/',
        component: HomePage,
        display: 'Home',
        icon: 'glyphicon glyphicon-home'
    },
    {
        path: '/profile',
        component: Profile,
        display: 'My Profile',
        icon: 'account_circle',
        beforeEnter: (to, from, next) => {
            if (!auth.isAuthenticated()) {
                next({ path: '/unauthorized' })
            } else {
                next()
            }
        }
    },
    {
        path: '/counter',
        component: CounterExample,
        display: 'Counter',
        icon: 'glyphicon glyphicon-education',
        beforeEnter: (to, from, next) => {
            if (!auth.isAuthenticated()) {
                next({ path: '/unauthorized' })
            } else {
                next()
            }
        }
    },
    {
        path: '/fetch-data',
        component: FetchData,
        display: 'Fetch data',
        icon: 'glyphicon glyphicon-th-list',
        beforeEnter: (to, from, next) => {
            if (!auth.isAuthenticated()) {
                next({ path: '/unauthorized' })
            } else {
                next()
            }
        }
    }
]
