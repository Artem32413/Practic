import React from 'react'
import styles from './Main.module.scss'
import { ReactComponent as VectorArrow } from '../img/VectorArrow.svg';
export default function Main({ photo, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    const elem = 'https://test-front.framework.team'
    return (
        <main>
            <div className='overMain'>
                <div className='block-input'>

                    <div className={styles.widthPhoto}>
                        {
                            photo.map((elPhotos, i) => (
                                <div className={styles.photoInfo}>
                                    <img src={elem + elPhotos.imageUrl} alt='' key={i} className={styles.overPhotoclass} />
                                    <div className={styles.overInfoPhoto}>

                                        <div className={styles.block}>
                                            <p className={styles.nameText}>{elPhotos.name}</p>
                                            <p className={styles.data}>{elPhotos.created}</p>
                                            
                                        </div>
                                        <button><VectorArrow/></button>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
