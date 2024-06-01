import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import el1 from '../Slider/el1.jpg';
import el2 from '../Slider/el2.jpg';
import el3 from '../Slider/el3.jpg';
import el4 from '../Slider/el4.jpg';
import el5 from '../Slider/el5.jpg';
import el6 from '../Slider/el6.jpg';
import el7 from '../Slider/el7.jpg';
import el8 from '../Slider/el8.jpg';
import el9 from '../Slider/el9.jpg';
import el1o from '../Slider/el1o.jpg';
import el11 from '../Slider/el11.jpg';
import el12 from '../Slider/el12.jpg';
import el13 from '../Slider/el13.jpg';
import './Slider.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <div>
       <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='room' src={el1}></img>
        </SwiperSlide>
  
        <SwiperSlide>   <img className='room' src={el2}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el3}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el4}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el5}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el6}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el7}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el8}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el9}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el1o}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el1}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el11}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el12}></img></SwiperSlide>
        <SwiperSlide>   <img className='room' src={el13}></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;