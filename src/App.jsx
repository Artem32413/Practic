import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Pagination from "./components/Pagination/Pagination";
import InputBlok from "./components/input-blok/InputBlok";
import Menu from "./components/Menu/Menu";
import React, { useEffect, useState } from 'react'
// import { filterTitles } from './components/Input-blok/InputBlok';
import { useTheme } from './hooks/use-theme'
import axios from 'axios'
function App() {

  const { theme, setTheme } = useTheme()
  const [photo, setPhoto] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setСurrentPage] = useState(1)
  const [photoPerPage] = useState(6)

  useEffect(() => {
    const getPhoto = async () => {
      setLoading(true)
      const res = await axios.get('https://test-front.framework.team/paintings')
      setPhoto(res.data)
      setLoading(false)
    }
    getPhoto()
  }, [])
  const lastPhotoIndex = currentPage * photoPerPage
  const firstPhotoIndex = lastPhotoIndex - photoPerPage
  const currentPhoto = photo.slice(firstPhotoIndex, lastPhotoIndex)

  const paginate = pageNumber => setСurrentPage(pageNumber)
  // filterTitles.map((title, index) => {
  return (

    <div className="wrapper">
      <Menu />
      <Header />
      <InputBlok />
      <Main photo={currentPhoto} loading={loading} />
      <Pagination
        photoPerPage={photoPerPage}
        totalPhotos={photo.length}
        paginate={paginate} />
    </div>

  );
  // })
}

export default App;
