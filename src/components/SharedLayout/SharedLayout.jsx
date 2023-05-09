import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import Greeting from 'components/Greeting/Greeting';
import css from './SharedLayout.module.css';


export default function SharedLayout() {
  return (
    <div className={css.container}>
      <header>
        <AppBar />
      </header>
      <main className={css.main}>
        <Suspense fallback={<Greeting text='Loading component...' />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}