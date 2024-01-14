import React from "react";
import style from "../../stylings/UrlForm.module.css";
import { v4 as uuidv4 } from 'uuid';
const InputButton = ({value, onChange}) => {
  const id = uuidv4();
  return (
    <label htmlFor={id} className={style.inputLabel}>
    <input
      id = {id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={style.placeHolder}
      placeholder="Enter the link here"
    />
    </label>
  );
};

export default InputButton;
