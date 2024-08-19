import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

function Create() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    username: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Corrected typo
    axios.post('http://localhost:3000/user', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Add a user</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={e => setValues({ ...values, name: e.target.value })} />
        <br />
        <hr />
        <label htmlFor="company">Company</label>
        <input type="text" name="company" onChange={e => setValues({ ...values, company: e.target.value })} />
        <br />
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={e => setValues({ ...values, username: e.target.value })} />
        <br />
        <hr />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={e => setValues({ ...values, email: e.target.value })} />
        <br />
        <hr />
        <button type="submit">
          Submit
        </button>
        <Link to='/'>Back</Link>
      </form>
    </div>
  );
}

export default Create;
