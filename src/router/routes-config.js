import React from 'react';
import { Register } from '../features';
import RenderRoutes from './RenderRoutes';

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: Register },
  {
    path: '/setpassword',
    key: 'ROOT_SET_PASSWORD',
    exact: true,
    component: () => <h1>Set Password</h1>,
  },
  {
    path: '/login',
    key: 'ROOT_LOGIN',
    exact: true,
    component: () => <h1>Login</h1>,
  },
  {
    path: '/app',
    key: 'APP',
    component: RenderRoutes,
    // nested routes
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: '/app/profile',
        key: 'APP_PROFILE',
        exact: true,
        component: () => <h1>Profile</h1>,
      },
      {
        path: '/app/instructions',
        key: 'APP_INSTRUCTIONS',
        exact: true,
        component: () => <h1>How it works</h1>,
      },
      {
        path: '/app/schedule',
        key: 'APP_SCHEDULE',
        exact: true,
        component: () => <h1>Schedule</h1>,
      },
      {
        path: '/app/history',
        key: 'APP_HISTORY',
        exact: true,
        component: () => <h1>History</h1>,
      },
      {
        path: '/app/team',
        key: 'APP_HISTORY',
        exact: true,
        component: () => <h1>Team</h1>,
      },
    ],
  },
];

export default ROUTES;
