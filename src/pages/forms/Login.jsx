import './forms.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      return toast.error('Email is required');
    }
    if (password.trim() === '') {
      return toast.error('Password is required');
    }
    console.log({ email, password });
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn">Login</button>
      </form>
    </div>
  );
}
