// const apikey = "92660a80c8956c064b877d86ef45beac";
// const apitoken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY2MGE4MGM4OTU2YzA2NGI4NzdkODZlZjQ1YmVhYyIsIm5iZiI6MTc3NjgyMDU5My4xMzQsInN1YiI6IjY5ZTgyMTcxZGVjNDI2NzQwNmUwY2EyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q5VXo0SAbjP6oGzVhbBbAi0mGp63IA5XjdQrkddAVZA";
export type MovieSummary = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie" | "tv" | "person";
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string; // ISO 8601 date string (YYYY-MM-DD)
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
};

export type MovieListResponse = {
  page: number;
  results: MovieSummary[];
  total_pages: number;
  total_results: number;
};
export const img = (
  path: string | null,
  size: "w185" | "w342" | "w500" | "original" = "w500",
) => (path ? `https://image.tmdb.org/t/p/${size}${path}` : "/placeholder.png");
export type Paginated<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export interface MovieDetails extends Omit<MovieSummary, "genre_ids"> {
  tagline: string;
  runtime: number | null;
  status: string;
  genres: Genre[];
}

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
};

export type CrewMember = {
  id: number;
  name: string;
  job: string;
  department: string;
};

export type Credits = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

export type Video = {
  id: string;
  site: "YouTube" | string;
  key: string;
  type: "Trailer" | "Teaser" | "Clip" | string;
  official: boolean;
};

export type VideosResponse = {
  id: number;
  results: Video[];
};
