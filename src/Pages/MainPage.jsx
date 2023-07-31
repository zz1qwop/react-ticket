import React from 'react';
import Header from '../Components/Header';
import { getShowList } from '../api/firebase';
import ShowItem from '../Components/ShowItem';
import { useQuery } from '@tanstack/react-query';
import styles from './MainPage.module.css';
import './Slider.css';
import Slider from 'react-slick';

export default function MainPage() {
  const { isLoading, error, data: shows } = useQuery(['shows'], getShowList);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '70px',
    slidesToShow: 3,
    speed: 500,
  };

  const mediumSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const smallSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.shows}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <div className={styles.bigView}>
          <Slider {...settings}>
            {shows &&
              shows.map((show, index) => (
                <div key={index}>
                  <ShowItem key={show.id} show={show} />
                </div>
              ))}
          </Slider>
        </div>
        <div className={styles.mediumView}>
          <Slider {...mediumSettings}>
            {shows &&
              shows.map((show, index) => (
                <div key={index}>
                  <ShowItem key={show.id} show={show} />
                </div>
              ))}
          </Slider>
        </div>
        <div className={styles.smallView}>
          <Slider {...smallSettings}>
            {shows &&
              shows.map((show, index) => (
                <div key={index}>
                  <ShowItem key={show.id} show={show} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
