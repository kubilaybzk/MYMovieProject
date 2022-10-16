import Link from "next/link";
import React,{ useContext } from "react";
import {BiCameraMovie} from 'react-icons/bi'
import {FaTv} from 'react-icons/fa'
import { MovieContext } from "../../Context/MovieContext";
export default function SmallCard({ item }) {



let getContext = useContext(MovieContext);
let inputvalue = getContext.inputvalue;

/* 
Bu versiyonda son 5 anahtar kelimeyi local storage içinde tuttuk.
Bir önceki versiyonda datalar context yapısı ile tutuluyordu.
Context içinden gelen değeri json kullanarak local storage içinde tuttuk.
*/


function ClickList(e) {
if(localStorage.getItem("keys")===null || localStorage.getItem("keys")===undefined){
  localStorage.setItem("keys",[]);
  //Burada eğer yoksa tanımsız ise hata olmasını engellemek için bir koşul oluşturduk.
}
else{
  var data=JSON.parse(localStorage.getItem("keys")||"[]")
  if(data.length>=5){
    data.shift();
    data.push(inputvalue)
    // eğer kelime sayısı 5'den fazla ise ilk tutulan eleman yani 0. elemanı kaldırmak istedik.
  }
  else{
    data.push(inputvalue)
    //5'den az ise otomatik olarak arraye push ettik
  }
  //koşul sağlandıktan sonra elde edilen veri localstorage içine aktarıldı.
  localStorage.setItem("keys",JSON.stringify(data))
}
}




   {/* Arama sonuçlarının listelendiği kısımda her bir sonucun render edilmesi için gerekli olan comp. */}
  return (
    <Link href={`/movies/${item.id}`}>
      <div
      
      onClick={e=>ClickList(e)}
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
