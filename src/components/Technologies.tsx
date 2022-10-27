import * as React from "react";
import PropTypes from "prop-types";

const Technologies = ({ items }) => (
  <div className="columns is-mobile is-multiline">
    {items.map((item) => (
      <div key={item.text} className="column self-center technology-wrapper">
        <div className="has-text-centered">
          <div
            style={{
              width: "35px",
              display: "inline-block",
            }}
          >
            <img src={item.image.publicURL} alt={item.text} title={item.text} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default Technologies;
