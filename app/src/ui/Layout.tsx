import React, { ReactNode, Fragment } from 'react'
import Head from 'next/head'
import { APP_NAME } from "@/app/config/app"
import { Header, Footer } from 'src/components/index'

type LayoutProps = { children?: ReactNode, title?: string }

export function Layout({ children, title = APP_NAME }: LayoutProps) {
  return <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <div className="bg-white">
      <Header />
      {children}
      <Footer />
    </div>
    <style global jsx>{`
      img {
        pointer-events: none;
      }
    `}</style>
  </Fragment>
}
