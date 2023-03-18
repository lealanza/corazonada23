import { Link } from 'react-router-dom'
import '../pages/home/home.css'
import Image from '../images/headermain.png'

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
        <h1>Nuestra meta</h1>
        <p>Buscamos que nuestros alumnos logren una vida equilibrada integrando de forma efectiva el trabajo, la actividad social y la familia.</p>
          <Link to="/workshops" className="btn lg">Worshops</Link>
        </div>
        <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-img">
          <img src={Image} alt="About me" className='Image' />
        </div>
      </div>
       

      </div>
      
    </header>
  )
}

export default Header