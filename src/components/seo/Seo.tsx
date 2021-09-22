import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const Seo = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  const { title, siteUrl, description } = data.site.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default Seo;
