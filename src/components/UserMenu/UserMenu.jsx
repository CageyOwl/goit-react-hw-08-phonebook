import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';


function WidgetsNotLogged() {
  return (
    <>
      <Link className={css['user-menu__button']} to="/login">Login</Link>
      <Link className={css['user-menu__button']} to="/register">Register</Link>
    </>
  );
}
function WidgetsLogged() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <p className={css.greeting}>Greetings, {userName}!</p>
      <button className={css['user-menu__button']} type='button' onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}

export function UserMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div className={css['user-menu']}>{isLoggedIn ? <WidgetsLogged /> : <WidgetsNotLogged />}</div>;
}
