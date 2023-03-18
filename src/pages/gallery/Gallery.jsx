import Header from '../../components/Header'
import HeaderImage from '../../images/gallery.png'


import './gallery.css' 

const Gallery = () => {
  const galleryLenght = 8;
  const images =[];
  for(let i = 1; i<galleryLenght; i++){
    images.push(require(`../../images/foto${i}.jpeg`))
  }
  return (
    <>
    <Header title="Galeria" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia labore voluptatibus eaque ab eos nemo soluta dolore ad, id voluptas enim cum, nihil esse animi dolorum harum maiores amet commodi repudiandae? Mollitia optio pariatur quidem.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index)=>{
            return (
              <article key={index}>
                <img src={image} alt={`Gallery img ${index + 1}`} />
              </article>
            )
          })
        }
      </div>
    </section>
    
    </>
  )
}

export default Gallery