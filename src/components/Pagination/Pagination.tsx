import React, { FC } from 'react';
import arrow from '../img/arrow_icon.svg';
import PaginationStyles from './Pagination.module.scss';

interface PaginationProps {
  photoPerPage: number;
  totalPhotos: number;
  paginate: (number: number) => void;
}

const Pagination: FC<PaginationProps> = ({ photoPerPage, totalPhotos, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photoPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer>
      <ul className={PaginationStyles.pageListUl}>
        <button id='buttonHendler' className={PaginationStyles.btn}>
          <img src={arrow} alt='arrow' />
        </button>
        {pageNumbers.map(number => (
          <li className='page-item' key={number}>
            <a href='!#' className='pageLink' onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <button id='buttonHendler' className={PaginationStyles.btn2}>
          <img src={arrow} alt='arrow' />
        </button>
      </ul>
    </footer>
  );
};

export default Pagination;