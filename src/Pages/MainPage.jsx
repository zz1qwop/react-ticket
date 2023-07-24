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

  return (
    <div className={styles.container}>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div className={styles.shows}>
        <Slider {...settings}>
          {shows &&
            shows.map((show) => (
              <div>
                <ShowItem key={show.id} show={show} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
