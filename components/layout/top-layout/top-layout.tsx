import Head from "next/head"
import React from "react"

// ensure font is available
// import "@fontsource/roboto-slab"

export const defaultProps = {
  children: null,
  title: "Home",
  description: "Watheia Labs",
  canonical: "http://watheialabs.com/",
  locale: "en_US",
  imageUrl: "https://cdn.watheia.org/assets/images/logo-w-dark.png",
}

export interface TopLayoutProps {
  /**
   * The title set in head and seo meta data
   */
  title?: string

  /**
   * The description to use seo meta data
   */
  description?: string

  /**
   * An optional canonical url for the page
   */
  canonical?: string

  /**
   * An optional locale to use for the page
   */
  locale?: string

  /**
   * The url of an  optional image to use for link previews
   */
  imageUrl?: string
}

export const displayName = "TopLayout"

export const defaultPalette = "light"

/**
 * Component to display the background hero
 *
 * @param {Object} props
 */
export const TopLayout: React.FC<TopLayoutProps> = ({
  children,
  title = "Domain Driven Ideas by Watheia Labs",
  description = "Watheia Labs, LLC is an Engineering &mp; Design agency based in South-East Washington State.",
  canonical = "https://watheialabs.com",
  locale = "en_US",
  imageUrl = "https://cdn.watheia.org/assets/logo-modern-light.svg",
}): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cdn.watheia.org/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.watheia.org/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.watheia.org/assets/favicon-16x16.png"
        />
        <link rel="manifest" href="https://cdn.watheia.org/assets/site.webmanifest" />
        <link rel="shortcut icon" href="https://cdn.watheia.org/assets/icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,700&amp;display=swap"
        />
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default TopLayout
