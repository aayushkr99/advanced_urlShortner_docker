import React from "react";
import style from '../../stylings/BodyContent.module.css'
const BodyParagraph = () => {
  return (
    <div>
      <div className={style.para}>
        <p>
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience
        </p>
      </div>
    </div>
  );
};

export default BodyParagraph;
