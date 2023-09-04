import React from "react";
import "../../styles/header.css";

const Helmet = (props) => {
  <i class="ri-car-line"></i>
  document.title = "LUXARIDE- " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
