import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, text, img, button, link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {link && <a href={link} target='_blank' className="btn btn-primary">{button}</a>}
      </div>
    </div>
  );
};

//Validación de props
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  button: PropTypes.string,
  link: PropTypes.string
};

export default Card;