import {FaCrown} from 'react-icons/fa'
import {MdOutlineArrowRight} from 'react-icons/md'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Programas"/>
       
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title, info, path}) =>{
                return(
                    <Card className="programs__program" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className='btn sm'>Saber mas<MdOutlineArrowRight/></Link>

                    </Card>
                )})
            }
        </div>
        </div>
    </section>
  )
}

export default Programs