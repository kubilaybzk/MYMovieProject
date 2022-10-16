import React from "react";

import HeroSection from "../Components/HeroSection";
import Layout from "../Components/Layout";
import MovieList from "../Components/MovieList";

export default function Home({ UpComing,Popular,TopRated }) {
  return (
    <Layout>
      <HeroSection />
      {/* Ana sayfada bulunan Türkiye'de popüler listesi*/}
      <MovieList data={UpComing} Title={`Türkiye'de Yakında Vizyonda`} />
      <MovieList data={Popular} Title={`Türkiye'de Popüler`} />
      <MovieList data={TopRated} Title={`TMDB'de en çok oy alan filmler`} />
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const UpComingList = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR&page=1`
  );

  const PopularList = await fetch(
    ` https://api.themoviedb.org/3/movie/popular?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR&page=1`
  );

  const TopRatedList = await fetch(
    ` https://api.themoviedb.org/3/movie/popular?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR&page=1`
  );
 
  const UpComing = await UpComingList.json();
  const Popular = await PopularList.json();
  const TopRated = await TopRatedList.json();
  // Pass data to the page via props
  return { props: { UpComing,Popular,TopRated } };
}
