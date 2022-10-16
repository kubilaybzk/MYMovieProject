import React from 'react'

export default function CommentList({commentsdata}) {
  console.log(commentsdata.results)
    return (
      <div className='max-w-[1200px] mx-auto w-full'>
      <div className='grid grid-cols-1  p-4  gap-4'>
      {commentsdata.results.map((item,key)=>{
          return(
              <div key={key} className='border-2 border-black flex flex-col p-4'>
                  <span className='text-xs md:text-sm lg:text-base'><b className='pr-4'>İsim:  </b>{item.author}</span>
                  <span className='text-xs md:text-sm lg:text-base'><b className='pr-4'>Yorum:</b>{item.content}</span>
              </div>
          )
      })}
      </div>
  </div>
  )
}
