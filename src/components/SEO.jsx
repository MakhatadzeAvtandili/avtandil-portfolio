import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type, ogImage, keywords }) => {
  const defaultTitle = "Avtandili Makhatadze - Senior Developer & Designer";
  const defaultDescription =
    "Professional portfolio of Avtandili Makhatadze, a senior front-end developer and designer specializing in React, Tailwind CSS, and modern web technologies.";

  const siteTitle = title ? `${title} - Avtandili Makhatadze` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteOgImage = ogImage || "/social-preview.png";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name || "@avtandili"} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteOgImage} />
    </Helmet>
  );
};

export default SEO;
