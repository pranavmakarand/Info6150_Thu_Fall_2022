import React from "react";
import classes from "./PageCard.module.css";

const PageCard = ({ title, desc }) => {
  return (
    <div className={classes.Container}>
      <h1>{title}</h1>
      <div>{desc}</div>
    </div>
  );
};

export default PageCard;
