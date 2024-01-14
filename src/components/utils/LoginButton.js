import React from 'react';
import style from '../../stylings/NavBar.module.css'
const LoginButton = () => {
  return (
    <div>
        <button type='submit' className={style.buttonLogin}>Login</button>
    </div>
  );
}

export default LoginButton;
