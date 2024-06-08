import React from 'react'
import arrow from '../img/arrow_icon.svg'
import Pagination from './Pagination.module.scss'
export default function ({ photoPerPage, totalPhotos, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPhotos / photoPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <footer>
            <ul className={Pagination.pageListUl}>
                <button id='buttonHendler' className={Pagination.btn}>
                    <img src={arrow} />
                </button>
                {
                    pageNumbers.map(number => (
                        <li className='page-item' key={number}>

                            <a href='!#' className='pageLink' onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                <button id='buttonHendler' className={Pagination.btn2}>
                    <img src={arrow} />
                </button>

            </ul>
        </footer>
    )
}
