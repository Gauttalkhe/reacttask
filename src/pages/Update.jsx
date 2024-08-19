
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    company: "",
    username: "",
    email: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/` + id)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault(); // Correct the typo here
    axios.put(`http://localhost:3000/user/` + id, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Update a user</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={e => setValues({ ...values, name: e.target.value })}
        />
        <br />
        <hr />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={e => setValues({ ...values, company: e.target.value })}
        />
        <br />
        <hr />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={e => setValues({ ...values, username: e.target.value })}
        />
        <br />
        <hr />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={e => setValues({ ...values, email: e.target.value })}
        />
        <br />
        <hr />
        <button type="submit">
          Update
        </button>
        <Link to='/'>Back</Link>
      </form>
    </div>
  );
}

export default Update;
