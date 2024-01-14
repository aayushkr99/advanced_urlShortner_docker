import React, {useState} from 'react';
import style from "../stylings/UrlForm.module.css";
import InputButton from './utils/InputButton';
import SubmitButton from './utils/SubmitButton';
import fetchData from './FetchData';

const UrlForm =  ({setResponse}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    const value = await fetchData(inputValue)
    setResponse(value)

    setInputValue("");
    
  }

  const handleChange = (value) => {
    setInputValue(value)
  }


  return (
    <div className={style.layout}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.placeHolderWraper}>
          <InputButton value={inputValue} onChange={handleChange} />
          {inputValue !== "" && <SubmitButton>Shorten Now</SubmitButton>}
        </div>
      </form>
    </div>
  );
}

export default UrlForm;
