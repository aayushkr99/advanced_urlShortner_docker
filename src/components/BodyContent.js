import React, {useState} from "react";
import style from "../stylings/BodyContent.module.css";
import BodyHeader from "./utils/BodyHeader";
import BodyParagraph from "./utils/BodyParagraph";
import UrlForm from "./UrlForm";
import ListContent from "./ListContent";

const BodyContent = () => {
  const [responseData, setResponse] = useState(null);
  return (
    <div className={style.outerFrame}>
      <div className={style.body}>
        <BodyHeader />
        <BodyParagraph />
        <UrlForm setResponse= {setResponse}/>
        {responseData && <ListContent responseData={responseData} />}
      </div>
    </div>
  );
};

export default BodyContent;
