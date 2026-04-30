"use client";
import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { tmdb } from "@/app/tmdb";
import { MovieSummary } from "@/app/type";
import { Moviecards } from "@/app/components/Moviecards";
import { Pagination } from "@/app/components/Pagination";
import { myAxios } from "@/app/axios";

export default function Page() {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const { type }: { type: "upcoming" | "trending" } = useParams();

  const pageInfo = {
    upcoming: {
      url: "/movie/upcoming",
      title: "Upcoming",
    },
    trending: {
      url: "/movie/popular",
      title: "Trending",
    },
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const page = pageInfo[type] || null;

  useEffect(() => {
    myAxios
      .get("movie/upcoming?api_key=92660a80c8956c064b877d86ef45beac", {
        params: {
          page: currentPage,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
        setTotalPages(res.data.total_pages);
      });
  }, [currentPage]);

  if (!page) return notFound();

  return (
    <main>
      <div className='container'>
        <h2>{page.title} </h2>
        <div className='grid grid-cols-5 gap-5'>
          {movies.map((movie) => (
            <Moviecards
              key={movie.id}
              card={movie}
            />
          ))}
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </main>
  );
}
