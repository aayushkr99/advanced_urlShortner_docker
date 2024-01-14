// ListContent.js
import React from "react";
import Barcode from "react-barcode";
import style from "../stylings/ListContent.module.css";

const ListContent = ({ responseData }) => {

  return (
    <div>
      <h1 className={style.header}>URL DETIALS</h1>
      <div className={style.list}>

        <div className={style.element}>
          <label className={style.label}>Short URL: </label>
          <p className={style.para}><a href={responseData.shortUrl} target="_blank" rel="noopener noreferrer">{responseData.shortUrl}</a></p>
        </div>

        <div className={style.element}>
          <label className={style.label}>URL Code: </label>
          <p className={style.para}>{responseData.urlCode}</p>
        </div>

        <div className={style.element}>
          <label className={style.label}>Barcode: </label>
          <Barcode value={responseData.shortUrl} width={1} height={35} displayValue={false}/>
        </div>
      </div>
    </div>
  );
};

export default ListContent;
