"use client"
import Idata from "@/app/osnovniye/Idata";

let url:any
export default async function Page ({params} : {params: {id:number}})  {
    async function getData() {
        const res = await fetch('https://shau1921.pythonanywhere.com/api/v1/damirsinbachasti')



        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        return res.json()
    }




    const data:Idata[] = await getData()

    for(let i = 0; i < data.length; i++){
        if(data[i]['id'] == params.id) {
            url = data[i]
            break;
        }
    }







    return (
        <>

            <iframe width="100%" height="800" src={url['url']}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </>

    );
};
