import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import loginService from '../../services/login-service';
const Register: React.FC<{setToken: any}> = (props) => {

  const [name, setName]: [string|undefined, any|undefined] = useState();
  const [username, setUsername]: [string|undefined, any|undefined] = useState();
  const [password, setPassword]: [string | undefined, any | undefined] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (username && password && name) {
      const token = await loginService.register(username, password, name);

      setPassword(undefined);
      setName(undefined);
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
    <div>
      <div id="social"></div>
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
          <label>
            name
            <input 
              type="text" name="name"
              onChange={(e: any) => setName(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
};

Register.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Register;
