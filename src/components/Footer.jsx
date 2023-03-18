import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {FaLinkedin, FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni minima ex ea amet earum quo accusantium perferendis consequuntur! Magnam.</p>
                <div className="footer__socials">
                    <a href="hhtp://linkedin.com/" target="_blank" rel='noreferrer'><FaLinkedin/></a>
                    <a href="hhtp://facebook.com/" target="_blank" rel='noreferrer'><FaFacebook/></a>
                    <a href="hhtp://twitter.com/" target="_blank" rel='noreferrer'><AiOutlineTwitter/></a>
                    <a href="hhtp://instagram.com/" target="_blank" rel='noreferrer'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Enlaces</h4>
                <Link to ="/about">Sobre mi</Link>
                <Link to ="/gallery">GAlery</Link> 
                <Link to ="/contact">Contacto</Link> 
                <Link to ="/workshops">Workshops</Link>
            </article>
            <article>
                <h4>Conocimiento</h4>
                <Link to ="/s">Blog</Link>
                <Link to ="/s">Estudios de casos</Link> 
                <Link to ="/s">Eventos</Link> 
                <Link to ="/s">Comunidad</Link>
                <Link to ="">FAQs</Link>
            </article>
            <article>
                <h4>Ponerse en contacto</h4>
                <Link to ="/contact">Contacto</Link> 
                <Link to ="/s">Soporte</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Leandro Lanza &copy; All Rights Reserved</small>
            </div>
    </footer>
  )
}

export default Footer