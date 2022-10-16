import React from "react";

export default function ImageList({ MoviesImages }) {
  console.log(MoviesImages);
  return (
    <div
      className={
        `flex flex-col max-w[1200px] gap-2 p-4 lg:p-10` +
          MoviesImages.posters.length >
        1
          ? `mx-auto`
          : null
      }
    >
      <span className="text-xl md:text-2xl lg:text-3xl underline font-bold">{`Resimler`}</span>
      <div className="not-prose relative  rounded-xl overflow-hidden max-w-[870px] md:max-w-[1200px] lg:max-w-full mx-auto">
        <div className="absolute inset-0  "></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="relative">
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-14">
              {MoviesImages.posters.map((item, key) => {
                return (
                  <div key={key} className="snap-center shrink-0">
                    <img
                      className="shrink-0 w-50 h-30 rounded-lg shadow-xl bg-white"
                      src={
                        item.file_path!=null || item.file_path!=undefined
                          ? `https://image.tmdb.org/t/p/w220_and_h330_face/${item.file_path}`
                          : `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
                      }
                      alt={`${item.file_path}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
