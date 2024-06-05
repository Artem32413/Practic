import React from 'react'
import './Main.modul.scss'
export default function Main({ photo, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    const elem = 'https://test-front.framework.team'
    return (
        <main>
            <div className='overMain'>
                <div className='block-input'>

                    <div className='widthPhoto'>
                        {
                            photo.map((elPhotos, i) => (
                                <div className='photoInfo'>
                                    <img src={elem + elPhotos.imageUrl} alt='' key={i} className='overPhotoclass' />
                                    <div className='overInfoPhoto'>

                                        <div>
                                            <p>{elPhotos.name}</p>
                                            <p className='data'>{elPhotos.created}</p>
                                        </div>
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
