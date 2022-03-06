import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import {SERVER_URL} from '../config'


async function loginUser(username, password) {
    return fetch(SERVER_URL + '/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // username: username.target.value,
        // password: password.target.value
        username: username,
        password: password
      })
    })
    .then(data => data.json())
}



export default function Login(props) { 

    // const [username, setUserName] = useState();
    // const [password, setPassword] = useState();

    const username = 'kot'
    const password = 'koty1994'
  
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser(
          username,
          password
      );
      if ('token' in response) {
          console.log("Success" + response.message)
          localStorage.setItem('token', response['token']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/list";      
      } else {
            console.log("Failed", response.message, "error");
      }
    }
  
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Login' placeholder='Login' value={username}/>
                <Form.Input label='Enter Password' type='password' value={password}/>
            </Form.Group>
            <Form.Button onClick={handleSubmit}>Submit</Form.Button>
        </Form>
    );
}