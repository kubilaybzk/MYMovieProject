import React from 'react'

export default function ImageList({MoviesImages}) {
    console.log("MoviesImages",MoviesImages)
    let blogs=[2,3]
  return (
    <div className="not-prose relative  rounded-xl overflow-hidden max-w-[870px] md:max-w-[1200px] lg:max-w-full mx-auto">
        <div className="absolute inset-0 bg-grid-slate-100 "></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="relative">
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-14">
              {MoviesImages.posters.map((item, key) => {
                return (
                    <div class="snap-center shrink-0">
                    <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.file_path}`}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  )
}
