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
    id: 1,
    name: "Дамирсынба",
    photo: "/damirsinba.png",
    podzagolovok: "Гачи бос",
    description: "Он был обычным мальчиком, пока ему не написал Суслан Рапаргалиев, он снимается в фильме,\n" +
        "                            зазвиждается и мудрец превращает его в шампунь ....",
    firstappearance: "Дамирсынба 1",
    lastappearance: "Дамирсынба 18",
    awards: ["https://sun9-68.userapi.com/impg/iMzhIG4M9WNeI-1wVwrbvQm54G60hytJSxgE-w/XyA7k7rjcGM.jpg?size=1920x1080&quality=96&sign=23a5fce9bd74fdf6a9a7cf9e9fb37818&type=album","https://sun9-77.userapi.com/impg/QbZifoI9Fe_2ULjHIecaAe2eVFZ0vXzMPexMXQ/JJUXMjSsXMY.jpg?size=1920x1080&quality=96&sign=af572b7805637855f37ff5c13317e3d7&type=album", "https://sun9-69.userapi.com/impg/PEIMwZQRzenqMTcg8mCTqjK0KfG7ai8qoIoyyw/AZF6frO-cVc.jpg?size=1920x1080&quality=96&sign=9ed6bc3844678adb74135ca6279a24b1&type=album", "https://sun9-32.userapi.com/impg/O3gslyHnVbqejoen-1fH37XMUU_ZH8Gh7xAJSA/WrLJXJ51QsY.jpg?size=1280x720&quality=96&sign=5ac30f928d8c734606fe9d07606af964&type=album", "https://sun9-14.userapi.com/impg/pdJ9I-OOAgMwiI0kYPTokG51t4ffIiRrKe_pHw/xWNizVd2f6k.jpg?size=1920x1080&quality=96&sign=549dadad4d78217426c0fbea737e387d&type=album"],
    ultimateName: "Гачи бос",
    ultimateUrl: "https://sun9-43.userapi.com/impg/tuoWrP9u__fkT3vvldTyTC4kQpVMR1Yuv2WqoA/kBxGCPbxSLw.jpg?size=636x372&quality=96&sign=08ef1b470f55dad66bc2ebe13a946eed&type=album",
    actor: "Дамир",
    voiceActor: "Дамир"
}
let erorCount:number = 0;
const Page = ({params} : {params: {id:number}}) => {
    const [info, setInfo] = useState(1);


    for(let i = 0; i < heroes.length; i++){
        if(heroes[i].id == params.id) {
            data = heroes[i]
            break;
        } else {
            erorCount++;
        }
    }


    if(erorCount === heroes.length) {
        // @ts-ignore
        return (<Eror> </Eror>)
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