import React from 'react';
import Header from '../Components/Header';
import { getShowList } from '../api/firebase';
import ShowItem from '../Components/ShowItem';
import { useQuery } from '@tanstack/react-query';
import styles from './MainPage.module.css';

export default function MainPage() {
  const { isLoading, error, data: shows } = useQuery(['shows'], getShowList);

  return (
    <div>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div className={styles.shows}>
        {shows && shows.map((show) => <ShowItem key={show.id} show={show} />)}
      </div>
    </div>
  );
}
