export async function GetAllInfoAbouthMovie(id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR`
    );
    const data = await res.json();
    const res_image = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=e74583c7b5a0ac88be452c579457ee9d`
    );
    const data_image = await res_image.json();
  
    const similar_data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=e74583c7b5a0ac88be452c579457ee9d&language=tr-TR`
    );
  
    const similar_movies = await similar_data.json();
  
    const get_videos = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e74583c7b5a0ac88be452c579457ee9d&language=en-US`
    );
  
    const videos = await get_videos.json();
  
    const get_comments = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e74583c7b5a0ac88be452c579457ee9d&language=en-US&page=1`
    );
  
    const comments = await get_comments.json();
    return { props: { data, data_image, similar_movies, videos, comments } };
  }
  