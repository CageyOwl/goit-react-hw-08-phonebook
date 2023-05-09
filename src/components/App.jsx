import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';

import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const Phonebook = lazy(() => import('../pages/Phonebook'));
const PhonebookEdit = lazy(() => import('../pages/PhonebookEdit'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/Login'));
const BadURL = lazy(() => import('../pages/BadURL'));


export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectPath="/login" component={<Phonebook />} />
          }
        />
        <Route
          path="edit-contact/:contactId"
          element={
            <PrivateRoute redirectPath="/login" component={<PhonebookEdit />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<Registration />}
              redirectPath={'/contacts'}
              restricted={true}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              component={<Login />}
              redirectPath={'/contacts'}
              restricted={true}
            />
          }
        />
        <Route path="*" element={<BadURL />} />
      </Route>
    </Routes>
  );
}
