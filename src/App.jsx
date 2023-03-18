
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Workshops from './pages/workshops/Workshops'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='workshops' element={<Workshops/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App