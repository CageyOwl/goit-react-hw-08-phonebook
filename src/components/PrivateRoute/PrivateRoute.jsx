import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';


export function PrivateRoute({ component: Component, redirectPath = '/'}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? Component : <Navigate to={redirectPath} />}
    </>
  );
}
