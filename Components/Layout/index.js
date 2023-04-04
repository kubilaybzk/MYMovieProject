import Head from 'next/head'
import React from 'react'
import Header from '../Header/Header'


export default function Layout({children,Title}) {
  return (
    <div className='flex flex-col'>
        <Head>
        <title>{Title?`${Title}`:"AnaSayfa"} -TTMovies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="https://www.technopat.net/sosyal/data/avatars/l/61/61820.jpg?1433613696" />
      </Head>
        <Header/>
        <div className='px-4 lg:max-w-[1200px] mx-auto'>
        {children}
        </div>
    </div>
  )
}