import React, { useEffect, useState } from 'react';
import './styles.css';
import 'swiper/css/swiper.css';
import ReactIdSwiper from 'react-id-swiper';

const Slider = ({ children, setCurrentSlider }) => {
  const [slide, setSlide] = useState(0);
  let swiperRef;
  const params = {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false
    },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true
    },
    getSwiper: (swiper) => {
      swiperRef = swiper;
    }
  };
  useEffect(() => {
    swiperRef.on('slideChange', function() {
      console.log(swiperRef.realIndex);
    });
  }, []);

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <ReactIdSwiper {...params}>{children}</ReactIdSwiper>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default Slider;
