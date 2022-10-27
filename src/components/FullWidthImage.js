import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    title,
    subheading,
    image,
    height = 400,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          color: "white",
        }}
      >
        {
          <GatsbyImage
            image={getImage(image)}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              maxHeight: height,
            }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        }{" "}
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
                  backgroundColor: "#f4b8a4",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.5em 1em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  backgroundColor: "#7ddde8",
                  lineHeight: "1",
                  textAlign: "center",
                  padding: "0.5em 1em",
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
  image: PropTypes.object,
  imagePosition: PropTypes.string,
};
