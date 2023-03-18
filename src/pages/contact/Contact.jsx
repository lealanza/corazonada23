import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg.jpeg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Contactame" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@corazonada.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://www.messenger.com/t/114318503295158" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+34343242342343" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact