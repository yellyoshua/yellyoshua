import React, { ReactNode, Fragment } from 'react'
import Head from 'next/head'
import { APP_NAME } from "@/app/config/app"
import { Header, Footer } from '@/app/components'

type LayoutProps = { children?: ReactNode, title?: string }

export function Layout({ children, title = APP_NAME }: LayoutProps) {
  return <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="bg-white dark:bg-gray-900">
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
