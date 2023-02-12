import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { MUTATION_LOGIN } from "../../utils/mutations";
import Auth from '../../utils/Auth';

function Login()  {
  const [formState, setFormState] = useState({ username: '', password: '' });
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const [login,{error}] = useMutation(MUTATION_LOGIN);
    
  const submitHandler = async event => {
    event.preventDefault();

    try{
      const {data} = await login({
        variables:{...formState}
      });

      console.log(data);
      Auth.login(data.userLogin.token);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
    <form onSubmit= {submitHandler}>
      <div>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
    {error && <div>Login failed</div>}
    </div>
  );
}

export default Login;