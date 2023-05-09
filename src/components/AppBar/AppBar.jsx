import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';


export function AppBar() {
  return (
    <div className={css.appbar}>
      <nav className={css.nav}>
        <NavLink to="">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
      <UserMenu />
    </div>
  );
}
