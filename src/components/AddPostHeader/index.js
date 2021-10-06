import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
const AddpostHeader = ({ name }) => {
  const history = useHistory();
  return (
    <div id="add-post-header">
      <i onClick={() => history.push("/")} className="fas fa-arrow-left"></i>
      &nbsp;
      <h2>{name}</h2>
    </div>
  );
};

export default AddpostHeader;
