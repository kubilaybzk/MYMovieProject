import Link from "next/link";
import React,{ useContext } from "react";
import {BiCameraMovie} from 'react-icons/bi'
import {FaTv} from 'react-icons/fa'
import { MovieContext } from "../../Context/MovieContext";
export default function SmallCard({ item }) {



  let getContext = useContext(MovieContext);
  let inputvalue = getContext.inputvalue;
  let setLastSearch = getContext.setLastSearch;
  let lastSearchs = getContext.lastSearchs;


  //Anahtar kelimeler ile arama yapıldktan sonra o kelimeleri context içinde tutulmasını sağlamak için oluştutulan fonksiyon.
  //Son 5 Anahtar kelimenin global state içinde tutulmasını sağladığımız alan.
  function ClickList() {
    if(lastSearchs===null|| lastSearchs===undefined){
      lastSearchs=[]
    }
    let Array = [...lastSearchs];
    Array.push(inputvalue);
    if (Array.length == 6) {
      Array.shift() 
      setLastSearch(Array);
    } else {
      setLastSearch(Array);
    }
  }




   {/* Arama sonuçlarının listelendiği kısımda her bir sonucun render edilmesi için gerekli olan comp. */}
  return (
    <Link href={`/movies/${item.id}`}>
      <div
      
      onClick={e=>ClickList()}
      className="w-full flex flex-row items-center justify-start gap-4 hover:bg-gray-400 group cursor-pointer"
    >
       {/*görsel kısmının ayarlandığı alan. */}
      <img
        className="w-8 h-8 object-cover"
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
        alt={`${item.poster_path}`}
      />
       {/* Tv yada Film fetch işlemleri sonucu database isimlendirmelerinde olan farklılıklar sonucu bu şekil bir sorgu yapmam gerekti. */}
      <span className="text-black group-hover:text-white">{item.original_name?item.original_name:item.original_title?item.original_title:null}</span>
       {/* Bir televizyon dizisi ise TV iconu Sinema iconu ise Film ise kullanıcı için render oluyor.. */}
      {item.media_type==="movie"?<FaTv className="text-gray-400 group-hover:text-white"/>:<BiCameraMovie className="text-gray-400 group-hover:text-white"/>}
    </div>
    </Link>
  );
}
