import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

//Burada daha önce eğer arama yapılmış ise o aramaların listelenmesini sağladığımız alan.


export default function LastKeys() {
  let getContext = useContext(MovieContext);
  let lastSearchs = getContext.lastSearchs;
  return (
    <div className="flex flex-col w-full  mt-4">
      <span className="font-bold">Son aramalar:</span>
      <div className="flex flex-row gap-5">
        {/* Son aramalar boş ise ekrana son armaa yok yazacak varsa listeyi basacak*/}
        {lastSearchs ? (
          lastSearchs.map((item, key) => {
            return (
              <div className="py-2 px-4 bg-gray-300 rounded" key={key}>
                <span>{item}</span>
              </div>
            );
          })
        ) : (
          <span>Son arama yok.</span>
        )}
      </div>
    </div>
  );
}
