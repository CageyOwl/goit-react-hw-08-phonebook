import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
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
        type=""
        name="email"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}
