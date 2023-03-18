import { TiCogOutline } from "react-icons/ti";
import {BiBrush} from 'react-icons/bi'
export const links = [
    {
        name:"Inicio",
        path:"/",
    },
    {
        name:"Sobre mi",
        path:"/about",
    },
    {
        name:"Galeria",
        path:"/gallery",
    },
    {
        name:"Workshops",
        path:"/workshops",
    },
    {
        name:"Contacto",
        path:"/contact",
    },
]

export const programs =[
    {
        id:1,
        icon:<TiCogOutline/>,
        title:"Program One",
        info:"This is the day that lord has made. We will rejoice!!",
        path:"/programs/111",
    },
    {
        id:2,
        icon:<TiCogOutline/>,
        title:"Program Two",
        info:"This is the day that lord has made. We will rejoice!!",
        path:"/programs/222",
    },
    {
        id:3,
        icon:<TiCogOutline/>,
        title:"Program Three",
        info:"This is the day that lord has made. We will rejoice!!",
        path:"/programs/333",
    },
    {
        id:4,
        icon:<TiCogOutline/>,
        title:"Program For",
        info:"This is the day that lord has made. We will rejoice!!",
        path:"/programs/444",
    },
]

export const values =[
    {
        id:1,
        icon:<BiBrush/>,
        title:"Value One",
        desc:"This is the day that lord has made. We will rejoice!!",
    },
    {
        id:2,
        icon:<BiBrush/>,
        title:"Value Two",
        desc:"This is the day that lord has made. We will rejoice!!",
    },{
        id:3,
        icon:<BiBrush/>,
        title:"Value Three",
        desc:"This is the day that lord has made. We will rejoice!!",
    },{
        id:4,
        icon:<BiBrush/>,
        title:"Value For",
        desc:"This is the day that lord has made. We will rejoice!!",
    },
]

export const faqs =[
    {
        id:1,
        question:"Por qué se llama arte?",
        answer:"La palabra arte proviene del latín ars, artis y su definición es una obra o trabajo que expresa mucha creatividad, y también del griego τέχνη (téchne) que significa “técnica”. En la antigüedad, la palabra arte aplicaba a toda producción realizada por el hombre y a las disciplinas del saber hacer.",
    },
    {
        id:2,
        question:"Que te produce el arte?",
        answer:"El arte es una herramienta para poder expresar de forma libre y creativa las emociones. Permite conectarnos con nuestro interior y así sentir, escuchar y conocer nuestras emociones",
    },
    {
        id:3,
        question:"Cuál fue la primer obra de arte?",
        answer:"Las primeras manifestaciones del arte se han conocido como ARTE DE LA PREHISTORIA como; arte parietal o rupestre, relieves grabados o pinturas sobre rocas, paredes y techos de cuevas. Arte parietal o rupestre: Relieves grabados, pinturas sobre rocas (paredes y techos) de las cuevas.",
    },
    {
        id:4,
        question:"Cómo se representa el arte?",
        answer:"El arte se puede manifestar de diferentes maneras reflejando valores de su cultura, entre ellas encontramos: música, danza, fotografía, pintura, escultura, grabado, literatura, teatro, cine, arquitectura entre otros.",
    },
]


export const testimonials =[
    {
        id:1,
        name:"Mara",
        quote:"Lorem ipsum dolor sit amet.",
        job:"Estudiante",
        avatar:require("./images/avatar.png")
    },
    {
        id:2,
        name:"Sabrina",
        quote:"Lorem ipsum dolor sit amet.",
        job:"Estudiante",
        avatar:require("./images/avatar.png")
    },
    {
        id:3,
        name:"Andrea",
        quote:"Lorem ipsum dolor sit amet.",
        job:"Estudiante",
        avatar:require("./images/avatar.png")
    },
    {
        id:4,
        name:"Marcela",
        quote:"Lorem ipsum dolor sit amet.",
        job:"Estudiante",
        avatar:require("./images/avatar.png"),
    },
    {
        id:5,
        name:"Ara",
        quote:"Lorem ipsum dolor sit amet.",
        job:"Estudiante",
        avatar:require("./images/avatar.png"),
    },
]

export const works = [
    {
        id: 1,
        name: "Ilutacion con Lapiz",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.",
        price:2500,
        features:[
            {feature:'Primera Caracteristica', avialable:true},
            {feature:'Segunda Caracteristica', avialable:false},
            {feature:'Tercer Caracteristica', avialable:false},
            {feature:'Cuarta Caracteristica', avialable:true},
        ]
    }, {
        id: 2,
        name: "Ilustacion con Acuarelas",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.",
        price:3250,
        features:[
            {feature:'Primera Caracteristica', avialable:true},
            {feature:'Segunda Caracteristica', avialable:true},
            {feature:'Tercer Caracteristica', avialable:false},
            {feature:'Cuarta Caracteristica', avialable:true},
        ]

    }, {
        id: 3,
        name: "Ilustracion para Murales",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.",
        price: 4000,
        features:[
            {feature:'Primera Caracteristica', avialable:true},
            {feature:'Segunda Caracteristica', avialable:true},
            {feature:'Tercer Caracteristica', avialable:true},
            {feature:'Cuarta Caracteristica', avialable:false},
        ]
    }, {
        id: 4,
        name: "Ilustracion digital",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.",
        price:6000,
        features:[
            {feature:'Primera Caracteristica', avialable:true},
            {feature:'Segunda Caracteristica', avialable:true},
            {feature:'Tercer Caracteristica', avialable:true},
            {feature:'Cuarta Caracteristica', avialable:true},
        ]
    }
]