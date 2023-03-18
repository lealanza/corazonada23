
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpeg'
import Card from '../../UI/Card'
import {works} from '../../data'
import './workshops.css'

const Workshops = () => {
  return (
    <>
    <Header title="Workshops" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur.
    </Header>
    <section className="workshops">
      <div className="container workshops__container">
        {
          works.map(({id, name, desc, price, features})=>{
            return(
              <Card key={id} className="workshop">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mes</h2>
                <h4>Caracteristicas</h4>
                {
                  features.map(({feature, avialable}, index)=>{
                    return <p key={index} className={!avialable ? 'disabled' : '' }>{feature}</p>
                  })
                }
                <button className='btn lg'>Elegí tu Workshop</button>
              </Card>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Workshops
