import React from 'react';
import RenderRoutes from './RenderRoutes';

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: () => <h1>Log in</h1> },
  {
    path: '/app',
    key: 'APP',
    component: RenderRoutes,
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
