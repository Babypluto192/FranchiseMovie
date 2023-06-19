import classes from "./spinOff.module.scss";
import Movie from "../../components/Movie"
import Idata from "@/app/osnovniye/Idata";


export default async function Osnovniye ()  {

    async function getData() {
        const res = await fetch('https://shau1921.pythonanywhere.com/api/v1/damirsinbaspinoff')



        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        return res.json()
    }




    const data:Idata[] = await getData()


    return (
        <div>

            <h1 className={classes.h1}>Это Спин-оффы Дамирсынба</h1>


            {data.map( (el) => {
                        return (
                            <div key={el['id']} className={classes.container}>
                                <Movie id={'damirsinbaspinoff' + el['id']} title={el['title']} rating={el['rating']} url={el['url']}
                                       preview={el['preview']} film="спин-оффа"/>
                            </div>
                        )

                }

            )}
            <audio src="/spinoff.mp3" autoPlay className={classes.audio} ></audio>
        </div>
    );
};