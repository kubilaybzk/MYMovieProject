import React from 'react'

export default function CreditsList({credits}) {
  return (
    <div className='max-w-[1200px] mx-auto w-full'>
        <div className='grid grid-cols-2 md:gird-col-4 lg:grid-cols-5 p-4 gap-2'>
        {credits.cast.map((item,key)=>{
            return(
                <div key={key} className='border-2 border-black flex flex-col p-4'>
                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path}`} />
                    <span className='text-xs md:text-sm lg:text-base'><b>İsim:</b>{item.name}</span>
                    <span className='text-xs md:text-sm lg:text-base'><b>Karakter:</b>{item.character}</span>
                </div>
            )
        })}
        </div>
    </div>
  )
}
