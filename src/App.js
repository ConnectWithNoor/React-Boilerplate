import React from 'react';

import ROUTES from './router/routes-config';
import RenderRoutes from './router/RenderRoutes';

function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}

export default App;
