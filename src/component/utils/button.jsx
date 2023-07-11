import React from "react";
import { Link } from "react-router-dom";

export const Button = (text, className, link) => {
  return (
    <>
      <button className={className}>
        <Link to={link}>
          <p>{text}</p>
        </Link>
      </button>
    </>
  );
};

export const ButtonOnly = (onClick, text, className) => {
  return (
    <>
      <button onClick={onClick} className={className} type="submit">
        <p>{text}</p>
      </button>
    </>
  );
};
