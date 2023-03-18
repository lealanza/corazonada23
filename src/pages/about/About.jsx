import Header from '../../components/Header'
import HeaderImage from '../../images/foto11.jpeg'
import AboutImage from '../../images/fotoperfil.jpeg'
import MyVision from '../../images/mivision.jpeg'
import MyMission from '../../images/mimision.jpeg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="Sobre Mi" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quae minima omnis rerum, vero eum explicabo doloremque alias consequuntur rem at molestias quo repudiandae quas.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image"><img src={AboutImage} alt="About me" /></div>
        <div className="about__section-content">
          <h1>Mi Historia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti et reprehenderit suscipit accusantium, sapiente, illo quibusdam nemo iste modi obcaecati dicta quas culpa! Animi quod voluptates aut recusandae. Fugit cumque neque beatae vitae libero culpa quaerat quisquam mollitia, est dolore!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum qui ratione possimus quos deserunt inventore et at error? Facere explicabo ipsam voluptatum recusandae temporibus quibusdam eum soluta quaerat officia dolorum iusto enim ratione illum, fugiat repellat pariatur earum sit eaque sapiente odio! Sit commodi mollitia, itaque reiciendis ipsum vel ad.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quam vel quod a quidem voluptas.</p>
        
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Mi Vision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti et reprehenderit suscipit accusantium, sapiente, illo quibusdam nemo iste modi obcaecati dicta quas culpa! Animi quod voluptates aut recusandae. Fugit cumque neque beatae vitae libero culpa quaerat quisquam mollitia, est dolore!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum qui ratione possimus quos deserunt inventore et at error? Facere explicabo ipsam voluptatum recusandae temporibus quibusdam eum soluta quaerat officia dolorum iusto enim ratione illum, fugiat repellat pariatur earum sit eaque sapiente odio! Sit commodi mollitia, itaque reiciendis ipsum vel ad.</p>
        
        </div>
        <div className="about__section-image"><img src={MyVision} alt="Vision Img" /></div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image"><img src={MyMission} alt="Mission img" /></div>
        <div className="about__section-content">
          <h1>Mi Mision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti et reprehenderit suscipit accusantium, sapiente, illo quibusdam nemo iste modi obcaecati dicta quas culpa! Animi quod voluptates aut recusandae. Fugit cumque neque beatae vitae libero culpa quaerat quisquam mollitia, est dolore!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About