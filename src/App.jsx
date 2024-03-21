
import './App.css'
import GenreMovieList from './component/GenreMovieList'
import Header from './component/Header'
import ProductionHouse from './component/ProductionHouse'
import Slider from './component/Slider'

function App() {

  return (
    <>
      <div >
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
      </div>
    </>
  )
}

export default App
