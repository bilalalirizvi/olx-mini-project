import React from "react";
const mainContainer = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  zIndex: "1",
};
const container = {
  width: "340px",
  height: "340px",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  backgroundColor: "white",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
const icon = { fontSize: "60px", color: "red" };
const p1 = { color: "red", marginTop: "5px", fontSize: "18px" };
const p2 = { padding: "30px 0px" };
const button = {
  width: "100px",
  height: "40px",
  backgroundColor: "transparent",
  border: "1px solid red",
  borderRadius: "5px",
  cursor: "pointer",
};
const False = ({ error, onModalClose }) => {
  return (
    <div style={mainContainer}>
      <div style={container}>
        <i style={icon} className="far fa-times-circle"></i>
        <p style={p1}>Error</p>
        <p style={p2}>{error}</p>
        <button style={button} onClick={onModalClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default False;
