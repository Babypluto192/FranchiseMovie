"use client"; // This is a client component
import classes from "./heroes.module.scss";
import NextImage from "next/image";
import {useState} from "react";
import Nagradi from "./Nagradi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faB} from "@fortawesome/free-solid-svg-icons/faB";
import {faP} from "@fortawesome/free-solid-svg-icons/faP";
import {faA} from "@fortawesome/free-solid-svg-icons/faA";
import {faAward} from "@fortawesome/free-solid-svg-icons";
import {heroes} from "@/app/heroes/[id]/heroes";
import Eror from "@/components/eror";
import {faU} from "@fortawesome/free-solid-svg-icons/faU";

let data:IHeroes =  {
    id: 21,
    name: "Дамирсынба",
    photo: "/damirsinba.png",
    podzagolovok: "Гачи бос",
    description: "Он был обычным мальчиком, пока ему не написал Суслан Рапаргалиев, он снимается в фильме,\n" +
        "                            зазвиждается и мудрец превращает его в шампунь ....",
    firstappearance: "Дамирсынба 1",
    lastappearance: "Дамирсынба 18",
    awards: [""],
    ultimateName: "Гачи бос",
    ultimateUrl: "",
    actor: "Дамир",
    voiceActor: "Дамир"
}
const Page = ({params} : {params: {id:number}}) => {
    const [info, setInfo] = useState(1);

    let erorCount:number = 0;

    for(let i = 0; i < heroes.length; i++){
        if(heroes[i].id == params.id) {
            data = heroes[i]
            break;
        } else {
            erorCount++;
        }
    }


    if(erorCount === heroes.length) {

        return (<Eror/>)
    }


    function Handleclick(value: number) {
        setInfo(value)

    }


    function Switcher() {
        return ( <>
                <NextImage src={data.photo || "/placeholder-image.png"} alt={data.name} width={600} height={400} className={classes.image}
                />

                <div className={classes.header}>
                    <FontAwesomeIcon icon={faB}  className={classes.headerimages} onClick={() => {
                        Handleclick(1)
                    }} />
                    <FontAwesomeIcon icon={faP} className={classes.headerimages} onClick={() => {
                        Handleclick(2)
                    }} />
                    <FontAwesomeIcon icon={faAward} className={classes.headerimages} onClick={() => {
                        Handleclick(3)
                    }} />
                    <FontAwesomeIcon icon={faU}  className={classes.headerimages}  onClick={() => {
                        Handleclick(4)
                    }}/>
                    <FontAwesomeIcon icon={faA} className={classes.headerimages} onClick={() => {
                        Handleclick(5)
                    }} />


                </div>
            </>
        )
    }



    function Description() {
        return ( <>
                <h1  className={classes.h1}> {data.name}</h1>

                <p className={classes.podzagolovok}>
                    {data.podzagolovok}
                </p>


            </>
        )
    }


    switch (info) {
        case 1:
            return (
                <>

                    <div className={classes.container}>




                        <Switcher/>

                        <Description/>

                        <p className={classes.description}>
                            {data.description}

                        </p>



                    </div>



                </>

            )

        case 2:
            return (
                <>

                    <div className={classes.container}>



                        <Switcher/>

                        <Description/>



                        <p className={classes.description}>
                            Первое появление: {data.firstappearance} <br/>
                            Последнее поялвние: {data.lastappearance}

                        </p>





                    </div>



                </>
            )

        case 3:
            return (
                <>

                    <div className={classes.container3}>



                        <Switcher/>

                        <Description/>


                        <p className={classes.description}>
                            Личные награды:

                        </p>

                        <Nagradi nagradi = {data.awards}/>



                    </div>



                </>
            )

        case 4:
            return (
                <>

                    <div className={classes.container}>


                        <Switcher/>

                        <Description/>



                        <p className={classes.ultimate}>
                            {data.ultimateName}
                        </p>
                        <NextImage src = {data.ultimateUrl} alt={'ultimate'} width={200} height={200} className={classes.ultimate}/>






                    </div>



                </>
            )

        case 5:
            return (
                <>

                    <div className={classes.container}>


                        <Switcher/>

                        <Description/>






                        <p className={classes.ultimate}>
                            Актер: {data.actor} <br/>
                            Озвучкас: {data.voiceActor}
                        </p>








                    </div>



                </>
            )
        default:
            break;


    }

}





export default Page;