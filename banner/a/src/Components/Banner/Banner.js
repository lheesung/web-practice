import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import bannerimg from '../../Pages/Banner.json';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Banner.css'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
            bannerimg.banners?.map(index => {
                return(
                    <div key={index.num}>
                        <SwiperSlide className='slider'><img src={index.img}/></SwiperSlide>
                    </div>
                )
            })
        }
      ...
    </Swiper>
  );
};