import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
    }
    // console.log(username, password)
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblespage");
      })
      .catch(err => {
        console.log(err);
      });

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onChange={handleChange}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} />
        <br />
        <label htmlFor="password">Password </label>
        <input type="text" id="password" value={password} />
        <br />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
