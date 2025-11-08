import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMovies from "../hooks/useMovies";

export default function Carousel() {
  const { data: movies } = useMovies({ type: "tmdbLatest" });

  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1.2,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {movies?.slice(0,5).map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className={styles.swiperSlideContent}>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={styles.info}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
