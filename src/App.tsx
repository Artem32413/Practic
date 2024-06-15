import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Pagination from "./components/Pagination/Pagination";
import InputBlok from "./components/input-blok/InputBlok";
import axios from "axios";

interface Photo {
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

  useEffect(() => {
    const getPhoto = async (): Promise<void> => {
      setLoading(true);
      const res = await axios.get<Photo[]>(
        "https://test-front.framework.team/paintings",
      );
      setPhoto(res.data);
      setLoading(false);
    };
    getPhoto();
  }, []);

  const lastPhotoIndex: number = currentPage * photoPerPage;
  const firstPhotoIndex: number = lastPhotoIndex - photoPerPage;
  const currentPhoto: Photo[] = photo.slice(firstPhotoIndex, lastPhotoIndex);

  const paginate = (pageNumber: number): void => setСurrentPage(pageNumber);
  const nextPage = (): void => setСurrentPage((prev) => prev + 1);
  const prevPage = (): void => setСurrentPage((prev) => prev - 1);
  return (
    <div className="wrapper">
      <Header />
      <InputBlok />
      <Main photo={currentPhoto} loading={loading} />
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
