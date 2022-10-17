import React from 'react'
import Card from '../Card/Card';

export default function MovieList({data,Title}) {
  return (
    <div className="flex flex-col max-w[1200px] mx-auto gap-5 p-4 lg:p-10">
    <span className="text-xl md:text-2xl lg:text-3xl underline font-bold">{`${Title}`}</span>
    <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Grid  olarak tüm verilerin listelendiği alan.*/}
      {data.results &&
        data.results.map((item, key) => {
          return <Card item={item} key={key} />;
        })}
    </div>
  </div>
  )
}
