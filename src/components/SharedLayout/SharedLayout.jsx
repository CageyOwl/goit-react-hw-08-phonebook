import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import css from './SharedLayout.module.css';


export default function SharedLayout() {
  return (
    <div className={css.container}>
      <header>
        <AppBar />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
}