import React, { FC } from 'react';
import styles from './Main.module.scss';
import { ReactComponent as VectorArrow } from '../img/VectorArrow.svg';
interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  name?: string;
  created?: string;
}
interface MainProps {
  photo: Photo[];
  loading: boolean;
}



const Main: FC<MainProps> = ({ photo, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const elem: string = 'https://test-front.framework.team';
  return (
    <main>
      <div className='overMain'>
        <div className='block-input'>
          <div className={styles.widthPhoto}>
            {photo.map((elPhotos: Photo, i: number) => (
              <div className={styles.photoInfo} key={i}>
                <img src={elem + elPhotos.imageUrl} alt='' className={styles.overPhotoclass} />
                <div className={styles.overInfoPhoto}>
                  <div className={styles.block}>
                    <p className={styles.nameText}>{elPhotos.name}</p>
                    <p className={styles.data}>{elPhotos.created}</p>
                  </div>
                  <button><VectorArrow /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;