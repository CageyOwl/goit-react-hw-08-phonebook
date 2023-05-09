import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';


export function RestrictedRoute({ component: Component, redirectPath, restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {(isLoggedIn && restricted) ? <Navigate to={redirectPath} /> : Component}
    </>
  );
}
