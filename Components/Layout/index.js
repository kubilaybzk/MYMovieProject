import React from 'react'
import Header from '../Header/Header'


export default function Layout({children}) {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='px-4 lg:max-w-[1200px] mx-auto'>
        {children}
        </div>
    </div>
  )
}