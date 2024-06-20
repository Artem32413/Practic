import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Pagination from "./components/Pagination/Pagination";
import InputBlok from "./components/input-blok/InputBlok";
import Input from "./components/input-blok/Input";
import axios from "axios";
//test-front.framework.team/paintings?q=Callisto
interface Photo {
  name: any;
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

function App(): JSX.Element {
  const [photo, setPhoto] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setСurrentPage] = useState<number>(1);
  const [photoPerPage] = useState<number>(6);
  const [filterValue, setFilterValue] = useState<string>(''); // Добавляем состояние для хранения значения фильтрации

  useEffect(() => {
    const fetchPhotos = async (): Promise<void> => {
        setLoading(true);
        const res = await axios.get<Photo[]>(
            "https://test-front.framework.team/paintings",
            {
                params: {
                    q: filterValue, // Передаем значение фильтра в запрос
                }
            }
        );
        setPhoto(res.data);
        setLoading(false);
    };

    fetchPhotos();
}, [filterValue, currentPage]);

  function onInputChange(value: string): void {
      setFilterValue(value); // Обновляем значение фильтрации при изменении ввода
  }

  const filteredPhotos = photo.filter((photo: Photo) => {
      return photo.name?.toLowerCase().includes(filterValue.toLowerCase()) || false; // Фильтруем фотографии по введенному значению
  });

  const lastPhotoIndex: number = currentPage * photoPerPage;
  const firstPhotoIndex: number = lastPhotoIndex - photoPerPage;
  const currentPhoto: Photo[] = filteredPhotos.slice(firstPhotoIndex, lastPhotoIndex);

  const paginate = (pageNumber: number): void => setСurrentPage(pageNumber);
  const nextPage = (): void => setСurrentPage((prev) => prev + 1);
  const prevPage = (): void => setСurrentPage((prev) => prev - 1);

  return (
      <div className="wrapper">
          <Header />
          
          <InputBlok onInputChange={onInputChange} />
          <Main setPhoto={currentPhoto} loading={loading} />
          <Pagination
              photoPerPage={photoPerPage}
              totalPhotos={photo.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
          />
      </div>
  );
}

export default App;
