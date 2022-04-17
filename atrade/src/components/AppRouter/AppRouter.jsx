import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../../routes/routes';

const AppRouter = () => {

  const isAuth = false;

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            element={route.element()}
            path={route.path}
            exact={route.exact}
            key={route}
          />
        )}
        <Route path="*" element={<Navigate to="ideas" />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            element={route.element()}
            path={route.path}
            exact={route.exact}
            key={route}
          />
        )}
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
  )
}

export default AppRouter