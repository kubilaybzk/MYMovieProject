import React from 'react'
import Header from '../Header/Header'


export default function Layout({children}) {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='px-4'>
        {children}
        </div>
    </div>
  )
}