import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";


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
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Login</button>
    </form>
  );
}