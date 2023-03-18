import image from '../images/values.jpeg'
import SectionHead from './SectionHead'
import {BiBrush} from 'react-icons/bi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={image} alt="Values_image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<BiBrush/>} title={"Valores"}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum laudantium sed itaque. Officia, consequuntur.</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=>{
                            return(
                                <Card key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Values