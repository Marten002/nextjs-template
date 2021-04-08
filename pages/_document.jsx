import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="author" content="Starter NextJS App"/>
                    <meta name="description" content="Starter NextJS App"/>
                    <meta name="theme-color" content="#FFFFFF"/>
                    {/* Cleartype */}
                    <meta httpEquiv="cleartype" content="on"/>
                    {/* ogp url */}
                    <meta property="og:title" content="Modern NextJS template"/>
                    <meta property="og:description" content="Modern NextJS template"/>
                    <meta property="og:url" content=""/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:site_name" content="SNA"/>
                    <meta property="og:image" content=""/>
                    <meta property="og:image:secure_url" content=""/>
                    <meta property="og:image:type" content="image/png"/>
                    <meta property="og:image:width" content="256"/>
                    <meta property="og:image:height" content="256"/>
                    <meta property="og:image:alt" content="Starter NextJS App image"/>
                    {/* Social: Twitter */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="Modern NextJS template"/>
                    <meta name="twitter:creator" content="Dmitrii Gubin"/>
                    <meta name="twitter:title" content="Modern NextJS template"/>
                    <meta name="twitter:description" content="Modern NextJS template"/>
                    <meta name="twitter:image:src" content=""/>
                    {/* Social: Facebook */}
                    <meta property="og:url" content=""/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Modern NextJS template"/>
                    <meta property="og:image" content=""/>
                    <meta property="og:description" content="Modern NextJS template"/>
                    <meta property="og:site_name" content="Modern NextJS template"/>
                    <meta property="article:author" content="Dmitrii Gubin"/>
                    <meta property="article:publisher" content="Dmitrii Gubin"/>
                    {/* Social: Google+ / Schema.org */}
                    <meta itemProp="name" content="Modern NextJS template"/>
                    <meta itemProp="description" content="Modern NextJS template"/>
                    <meta itemProp="image" content=""/>
                    {/* basic favicon */}
                    <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico"/>
                    {/* third-generation iPad with high-resolution Retina display: */}
                    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/icons/favicon-144x144.png"/>
                    {/* iPhone with high-resolution Retina display: */}
                    <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/icons/favicon-114x114.png"/>
                    {/* first- and second-generation iPad: */}
                    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/icons/favicon-72x72.png"/>
                    {/* non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
                    <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/icons/favicon-57x57.png"/>
                    {/* Tell the browser it's a PWA */}
                    <meta name="mobile-web-app-capable" content="yes"/>
                    {/* Tell iOS it's a PWA */}
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    {/* loading fonts */}
                    {/*<link rel="preloaded" type="text/css" href="/fonts/index.css" media="all" as="style"/>*/}
                    <link rel="preload" href="/fonts/Roboto/roboto.woff2" as="font" crossOrigin=""/>
                    {/* manifest */}
                    <link rel="manifest" href="/manifest.json"/>
                    <title>NextJS starter template</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
