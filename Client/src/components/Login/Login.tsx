import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import loginService from '../../services/login-service';

const Login: React.FC<{setToken: any}> = (props) => {

  const [username, setUsername]: [string|undefined, any|undefined] = useState();
  const [password, setPassword]: [string | undefined, any | undefined] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (username && password) {
      const token = await loginService.loginWithUsernamePassword(username, password);

      if(token) {
        props.setToken(token);
        console.log('Login Component  - handleSubmit(): login successful', token);
      } else {
        // print a message saying this failed
        console.log('Login Component  - handleSubmit(): attempt failed');
      }
    } else {
      // print a message username/password is required
      console.log('Login Component  - handleSubmit(): required fields');
    }
  }
  
  return (
    <div className={styles.Login} data-testid="Login">
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input 
            type="text" name="username"
            onChange={(e: any) => setUsername(e.target.value)}
          />
        </label>
        <label>
          password
          <input 
            type="text" name="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
