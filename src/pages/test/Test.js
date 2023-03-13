import React from "react";
import './Test.css'

import { useParams } from "react-router-dom";

const Test = () => {
  const {appid} = useParams();
  return(<div className="test">App id acessado: {appid}</div>)
  
};

export default Test;
