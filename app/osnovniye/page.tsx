"use client"

import classes from "./osnovniye.module.scss";
import {useEffect, useState} from "react";
import Movie from "../../components/Movie"
import Loader from "@/components/Loader";


export default function Osnovniye ()  {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false)


    const getdata = async ()=>  {
        try {
            setLoading(true)
            const response = await fetch('http://shau1921.pythonanywhere.com/api/v1/damirsinbachasti')
            const json = await response.json()
            setData(json)

        } catch (e) {
            console.log(e)
        }

    }




    useEffect(() => {
        getdata().then(function(data){
            setLoading(false)
        })
    }, []);


    return (
        <div >

            <h1 className={classes.h1}>Это Основные части Дамирсынба</h1>

            {isLoading ? <Loader> </Loader> : <></> }

            {data.map(el =>
                <div key ={el.id} className={classes.container}>
                  <Movie id={el.id} title={el.title} url={el.url} rating={el.rating} preview={el.preview} />
                </div>
            )}
            {/*<audio src="/jhoncena.mp3" autoPlay className={classes.audio} ></audio>*/}
        </div>
    );
};