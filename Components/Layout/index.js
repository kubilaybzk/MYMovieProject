import Head from 'next/head'
import React from 'react'
import Header from '../Header/Header'


export default function Layout({children,Title}) {
  return (
    <div className='flex flex-col'>
        <Head>
        <title>{Title?`${Title}`:"AnaSayfa"} -TTMovies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="https://yt3.ggpht.com/ytc/AMLnZu8RC1dnKY9ohFazrPunwcaG91MTFhwiq5lyJpyKGw=s900-c-k-c0x00ffffff-no-rj" />
      </Head>
        <Header/>
        <div className='px-4 lg:max-w-[1200px] mx-auto'>
        {children}
        </div>
    </div>
  )
}