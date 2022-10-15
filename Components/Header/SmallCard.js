import React from "react";
import {BiCameraMovie} from 'react-icons/bi'
import {FaTv} from 'react-icons/fa'
export default function SmallCard({ item, key }) {
   {/* Arama sonuçlarının listelendiği kısımda her bir sonucun render edilmesi için gerekli olan comp. */}
  return (
    <div
      key={key}
      className="w-full flex flex-row items-center justify-start gap-4 hover:bg-gray-400"
    >
       {/*görsel kısmının ayarlandığı alan. */}
      <img
        className="w-8 h-8 object-cover"
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
      />
       {/* Tv yada Film fetch işlemleri sonucu database isimlendirmelerinde olan farklılıklar sonucu bu şekil bir sorgu yapmam gerekti. */}
      <span>{item.original_name?item.original_name:item.original_title?item.original_title:null}</span>
       {/* Bir televizyon dizisi ise TV iconu Sinema iconu ise Film ise kullanıcı için render oluyor.. */}
      {item.media_type==="movie"?<FaTv className="text-gray-400"/>:<BiCameraMovie className="text-gray-400"/>}
    </div>
  );
}
