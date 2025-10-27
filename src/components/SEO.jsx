import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, name, type, ogImage, keywords }) => {
  const defaultTitle = "Avtandili Makhatadze - Senior Developer & Designer";
  const defaultDescription =
    "Professional portfolio of Avtandili Makhatadze, a senior front-end developer and designer specializing in React, Tailwind CSS, and modern web technologies.";

  const siteUrl = "https://avtandil-portfolio.vercel.app";
  const location = useLocation();

  const siteTitle = title ? `${title} - Avtandili Makhatadze` : defaultTitle;
  const siteDescription = description || defaultDescription;

  const defaultOgImage =
    "https://avtandil-portfolio.vercel.app/social-preview.png";
  const siteOgImage = ogImage || defaultOgImage;

  const currentUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Avtandili Makhatadze Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name || "@avtandili"} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteOgImage} />
    </Helmet>
  );
};

export default SEO;
