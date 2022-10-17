import React from "react";

export default function CreditsList({ credits }) {
  return (
    <div className=" max-w[1200px] w-full mx-auto p-4 lg:p-10">
      <span className="text-xl md:text-2xl lg:text-3xl underline font-bold">
        Oyuncular
      </span>
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 gap-2">
          {credits.cast.map((item, key) => {
            return (
              <div
                key={key}
                className="border rounded  border-black flex flex-col p-4"
              >
                <img
                  src={
                    item.profile_path != null || item.profile_path != undefined
                      ? `https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path}`
                      : `https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`
                  }
                  alt={`${item.character}`}
                  className="w-full max-h-[250px] object-cover"
                />
                <div className="flex flex-col items-start justify-center w-full mt-2">
                  <span className="text-xs md:text-sm lg:text-base">
                    <b>İsim:</b>
                    {item.name}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base">
                    <b>Karakter:</b>
                    {item.character}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
