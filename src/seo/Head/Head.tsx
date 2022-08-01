import NextHead from 'next/head';
import React from 'react';

import { GoogleAnalytics } from '../GoogleAnalytics/GoogleAnalytics';

export interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const Head = (props: HeadProps) => {
  const {
    ogImage = 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1650138958/og-100_mvbgru.jpg',
    title = 'Portfolio 2022',
    description = "YUHANGANG's portfolio",
  } = props;

  return (
    <NextHead>
      <title>{`WebGL Learning - ${title}`}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="https://res.cloudinary.com/dpv0ukspz/image/upload/v1650137433/icon_wghyio.ico"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&family=Julius+Sans+One&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,500&display=swap"
        rel="stylesheet"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`WebGL Learning - ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`WebGL Learning - ${title}`} />
      <meta name="twitter:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <GoogleAnalytics />
    </NextHead>
  );
};
