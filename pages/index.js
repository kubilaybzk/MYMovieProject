import React from "react";

import HeroSection from "../Components/HeroSection";
import Layout from "../Components/Layout";
import MovieList from "../Components/MovieList";

export default function Home({ data }) {
  return (
    <Layout>
      <HeroSection />
      {/* Ana sayfada bulunan Türkiye'de popüler listesi*/}
      <MovieList data={data} Title={`Türkiye'de Yakında Vizyonda`} />
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
