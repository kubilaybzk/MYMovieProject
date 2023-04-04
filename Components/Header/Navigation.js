import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import LastKeys from "./LastKeys";
import SearchResults from "./SearchResults";

export default function Navigation({ setIsOpen, isOpen }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  let getContext = useContext(MovieContext);
  let SetInput = getContext.setInputValue;

  async function Search(e) {
    SetInput(e.target.value);
    if (
      e.target.value === null ||
      e.target.value === " " ||
      e.target.value === undefined ||
      e.target.value === ""
    ) {
      setData([]);
    } else {
      setLoading(true);

      let result = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API}&language=tr-TR&query=${e.target.value}&page=1&include_adult=false`
      );
      let a = await result.json();
      let b = await a.results;
      setData(b);
      setLoading(false);
    }
  }

  {
    /* Burası modal kısmı mobil kısmında tam ekran tablet ve web kısmında full olarak render olan kısım. */
  }

  return (
    <div
      className={`
     w-screen h-screen absolute top-0 left-0 
    flex flex-col justify-start items-center 
    md:justify-center md:items-center
    `}
    >
      <div className=" bg-transparent absolute w-screen  h-screen md:bg-black opacity-50"></div>
      <div
        className={`flex flex-col w-full h-full z-20 md:w-3/5 lg:w-2/5 md:h-fit p-4 bg-white md:rounded-xl`}
      >
        {/* Arama kısmının oluşturulduğu alan. */}
        <label className="w-full flex flex-row items-center justify-start px-2 border-[1px] border-gray-300">
          <svg
            aria-hidden="true"
            className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
          >
            <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
          </svg>
          <input
            className="bg-transparent w-full placeholder:via-gray-200 pl-2 outline-none h-[47px]"
            placeholder="Arama Yap"
            onChange={(e) => Search(e)}
          />
          <button
            onClick={(e) => setIsOpen(false)}
            className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-500 hover:text-white
            "
          >
            Kapat
          </button>
        </label>
        {/* Arama sonuçlarının listelenmesi için geliştirilen alan. */}
        <LastKeys />
        <SearchResults loading={loading} data={data} />
      </div>
    </div>
  );
}
