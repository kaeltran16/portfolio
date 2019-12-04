import React from 'react';

const SliderItem = ({ imageUrl, name, subHeading, intro, demoUrl, srcUrl }) => {
  return (
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__title">{name}</div>
        <div className="blog-slider__text">
          {subHeading}
        </div>
        <div className="blog-slider__info">Build tools: {intro}</div>
        <div className="blog-slider__button--container">
          <a href={demoUrl} className="blog-slider__button">
            LIVE
          </a>
          <a href={srcUrl} className="blog-slider__button">
            SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
