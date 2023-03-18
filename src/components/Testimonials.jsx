import { useState } from 'react'
import SectionHead from "./SectionHead"

import Card from "../UI/Card"
import {ImQuotesLeft} from 'react-icons/im'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {testimonials} from'../data'



const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];

    const prevTestimonialsHandler = ()=>{
        setIndex(prev=>prev-1)
        if(index <= 0){
            setIndex(testimonials.length - 1);
        }
    }
    const nextTestimonialsHandler = ()=>{
        setIndex(prev=>prev+1)
        if(index >= testimonials.length-1){
            setIndex(0);
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title={"Testimonios"} className="testimonials__head"/>
            <Card className="testimonial">
                <div className="testimonials__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonials__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonials__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialsHandler}><BsFillArrowLeftCircleFill/></button>
                <button className="testimonials__btn" onClick={nextTestimonialsHandler}><BsFillArrowRightCircleFill/></button>

            </div>
        </div>
    </section>
  )
}

export default Testimonials