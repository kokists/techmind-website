import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website'
}) => {
  // Create a full title with the site name
  const fullTitle = title ? `${title} | TechMind Infosys` : 'TechMind Infosys - Innovative Technology Solutions';
  
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="TechMind Infosys" />
    </Helmet>
  );
};

export default SEOHead;
