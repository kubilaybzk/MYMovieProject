import React from "react";
import Loading from "../Helpers/Loading";
import SmallCard from "./SmallCard";

export default function SearchResults({ loading, data }) {
  {
    /* Arama kısmının sonuçlarının listelendiği  alan. */
  }
  return (
    <div className="flex flex-col w-full pt-2 h-[400px] overflow-x-auto">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          {/* Data Fetch edilirken kullanıcının karşısına yüklendiğini belirtmek için gerekli. */}
          <Loading />
        </div>
      ) : (
        data.map((item, key) => {
          if (item.original_name || item.original_title) {
            {
              /*Bazı datalarda name bazı datalarda orjinal title olarak girili lduğunu fark ettim bundan dolayı bu şekilde bir sorgu oluşturdum. */
            }
            return <SmallCard  item={item} key={key} />;
          } else {
            return null;
          }
        })
      )}
    </div>
  );
}
