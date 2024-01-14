import React from 'react';
import style from "../../stylings/UrlForm.module.css"
const SubmitButton = ({children}) => {
  return (
    <div>
      <button className={style.button}>{children}</button>
    </div>
  );
}

export default SubmitButton;
