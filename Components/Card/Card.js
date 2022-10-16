import Link from 'next/link';
import React from 'react'

export default function Card({item}) {
  return (
    <Link href={`/movies/${item.id}` }>
      <div  className="flex flex-col cursor-pointer group">
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={
              item.poster_path!=null || item.poster_path!=undefined
                ? `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`
                : `https://via.placeholder.com/214x320`
            }

            alt={`${item.original_title}`}
          />
        </div>
        <div className="w-full p-2  bottom-0 h-full flex flex-col justify-start">
          <span className="text-black font-bold group-hover:text-blue-500">{item.original_title}</span>
          <span className="text-black font-light">
            {DateFormatter(item.release_date)}
          </span>
        </div>
      </div>
    </Link>
  );
}

function DateFormatter(date) {
  /*
  let  data = new Date(date);
  let day=data.getDay()
  let Month = data.getMonth();
  let year=data.getFullYear();
  let formattedDate=`${day} ${Month} ${year}`
*/
  const [year, month, day] = date.split("-");
  let formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}