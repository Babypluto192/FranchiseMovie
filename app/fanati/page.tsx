"use client"

import classes from "./fanati.module.scss";
import Movie from "../../components/Movie"
import NextImage from "next/image";
import Link from "next/link";
import Idata from "@/app/osnovniye/Idata";


export default  async function Osnovniye ()  {
    async function getData() {
        const res = await fetch('https://shau1921.pythonanywhere.com/api/v1/damirsinbafanati')



        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        return res.json()
    }




    const data:Idata[] = await getData()



    return (
        <div>

            <h1 className={classes.h1}>Это фанатская дейтельнсоть Дамирсынба</h1>

            <audio src="/fanati.mp3" autoPlay  className={classes.audio}></audio>


            {data.map( (el) => {
                        return (
                            <div key={el['id']} className={classes.container}>
                                <Movie id={el['id']} title={el['title']} rating={el['rating']} url={el['url']}
                                       preview={el['preview']} film="фаната"/>

                            </div>
                        )

                }

            )}
            <div   key={6} className={classes.container}>
                <NextImage src={'https://yt3.googleusercontent.com/ytc/AGIKgqMeEhzHnoTBiF0p0aa_c-n-zuyoNKdj0UJMDNnd=s176-c-k-c0x00ffffff-no-rj'} alt={'Мадияр'} width={400}  height={400} >

                </NextImage>
                <p>
                    Мадияр
                </p>
                <p>
                    Рейтинг фаната 10   из 10
                </p>

                <Link className="btn btn-secondary" href="https://www.youtube.com/@hdgttd/featured">
                    Смотреть
                </Link>



            </div>
            {/*<audio src="/jhoncena.mp3" autoPlay className={classes.audio} ></audio>*/}
        </div>
    );
};