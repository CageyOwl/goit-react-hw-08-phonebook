import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from '../LoginForm/auth.module.css';


export default function RegistrationForm() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
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
      name: state.name.trim(),
      email: state.email.trim(),
      password: state.password.trim(),
    });
    dispatch(register(state));
    setState({ name: '', email: '', password: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={css['form__input']}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={state.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        className={css['form__input']}
        type="email"
        name="email"
        title="Your email address."
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

      <button type="submit">Register</button>
    </form>
  );
}
