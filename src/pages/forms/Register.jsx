import './forms.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!username.trim()) {
      return toast.error('Username is required');
    }

    if (!email.trim()) {
      return toast.error('Email is required');
    }

    // simple email check
    if (!email.includes('@')) {
      return toast.error('Invalid email address');
    }

    if (!password.trim()) {
      return toast.error('Password is required');
    }

    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters');
    }

    if (!confirmPassword.trim()) {
      return toast.error('Confirm Password is required');
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    // success
    toast.success('Registration successful 🎉');

    console.log({
      email,
      username,
      password,
    });

    // reset form
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="form-wrapper">
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={formSubmitHandler} className="form">
        <h2 className="form-title">Create Account</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="form-btn">
          Register
        </button>
      </form>
    </div>
  );
}
