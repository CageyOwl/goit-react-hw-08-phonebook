import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './auth.module.css';


export default function LoginForm() {
  const [state, setState] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setState({
      email: state.email.trim(),
      password: state.password.trim(),
    });
    dispatch(logIn(state));
    setState({ email: '', password: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        className={css['form__input']}
        type="email"
        name="email"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        className={css['form__input']}
        type="text"
        name="password"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}
