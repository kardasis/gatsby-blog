import React from "react";
import PropTypes from "prop-types";

export default function FullWidthImage(props) {
  const {
    title,
    subheading,
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          backgroundColor: '#248289',
          color: 'white',
          padding: '80px'
        }}
      >
        {(title || subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  backgroundColor: 'transparent',
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  backgroundColor: 'transparent',
                  lineHeight: "1",
                  textAlign: "center",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
