import React from "react";
import Card from "../Components/Card/Card";
import HeroSection from "../Components/HeroSection";
import Layout from "../Components/Layout";

export default function Home({ data }) {
  return (
    <Layout>
      <HeroSection />
      {/* Ana sayfada bulunan Türkiye'de popüler listesi*/}
      <div className="flex flex-col max-w[1200px] mx-auto gap-5 p-4 lg:p-10">
        <span className="text-xl md:text-2xl lg:text-3xl underline font-bold">{`Türkiye'de Yakında Vizyonda`}</span>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {/* Grid  olarak tüm verilerin listelendiği alan.*/}
          {data.results &&
            data.results.map((item, key) => {
              return <Card item={item} key={key} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR&page=1`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
