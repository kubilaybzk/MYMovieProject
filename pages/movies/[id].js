import React from "react";
import CommentList from "../../Components/CommentList";
import CreditsList from "../../Components/Credits";
import Rating from "../../Components/Helpers/Rating";
import ImageList from "../../Components/ImageList";

import Layout from "../../Components/Layout";
import MovieList from "../../Components/MovieList";

export default function MoviesDetails({ MovieInformations,similar_movies,MoviesImages,Credits,CommentsData}) {
  let backdrop_path_with_url ="https://image.tmdb.org/t/p/original" + MovieInformations.backdrop_path;

  console.log(MovieInformations);

  return (
    <Layout>
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${backdrop_path_with_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          backdropFilter: "revert",
        }}
      >
        <div className="w-full flex flex-col z-50 bg-black bg-opacity-80 p-6 ">
          {/* Name*/}
          <h1 className="text-white text-[24px]">
            {MovieInformations.original_title}
          </h1>
          {/* Tags*/}
          <div className="flex flex-row w-full border-t border-b border-white justify-start gap-5 p-2">
            {MovieInformations.genres &&
              MovieInformations.genres.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="py-1 px-2 border-white border rounded"
                  >
                    <span className="text-white">{item.name}</span>
                  </div>
                );
              })}
          </div>

          {/* Image Description*/}

          <div className="flex flex-col pt-5  gap-5 items-center lg:flex-row justify-center  lg:items-center">
            {/* image comp */}
            <div className="w-60 border-white rounded-[12px] overflow-hidden border">
              <img
                className=""
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${MovieInformations.poster_path}`}
                alt=""
              />
            </div>
            {/* description comp */}
            <div className="flex flex-col items-start justify-start gap-4 lg:w-3/5 ">
              <div className="flex flex-col">
                <b className="text-white">Açıklama</b>
                <span className="text-white font-light">
                  {MovieInformations.overview
                    ? MovieInformations.overview
                    : "Bu dizi/film ile ilgili bir açıklama bulunamamıştır."}
                </span>
              </div>
              <Rating rate={5} />
            </div>
          </div>
        </div>
      </div>
      <MovieList data={similar_movies} Title={`Benzer Filmler`} />
      <ImageList MoviesImages={MoviesImages}/>
      <CreditsList credits={Credits}/>
      <CommentList commentsdata={CommentsData}/>
      

    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const GetMovieInformations = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR`
  );
  const GetSimilarMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR`
  );
  const GetMoviesImages = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=e74583c7b5a0ac88be452c579457ee9d`
  );
  
  const GetCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=e74583c7b5a0ac88be452c579457ee9d&language=en-US`
  );
  
  const GetComments = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=e74583c7b5a0ac88be452c579457ee9d&language=en-US&page=1`
  );


  const MovieInformations = await GetMovieInformations.json();
  const similar_movies = await GetSimilarMovies.json();
  const MoviesImages = await GetMoviesImages.json();
  const Credits = await GetCredits.json();
  const CommentsData = await GetComments.json();
  return { props: { MovieInformations,similar_movies,MoviesImages,Credits,CommentsData } };
}
