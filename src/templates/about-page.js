import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  headshot,
}) => {
  const PageContent = contentComponent || Content;
  const headshotImg = getImage(headshot) || headshot;

  console.log(headshotImg)
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="columns column is-10 is-offset-1">
            <div className="column  is-3">
              <GatsbyImage
                image={headshot.childImageSharp.gatsbyImageData}
                style={{'border-radius': "22px"}}
                className="shadow-xl"
              />
            </div>
            <div className="section column">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  headshot: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        headshot={post.frontmatter.headshot}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        headshot {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
