"use client"
import {useEffect, useState} from "react";
import Eror from "@/components/eror";

let url:any
const Page = ({params} : {params: {id:number}}) => {
    const [data, setData] = useState([]);
    const getdata = async ()=>  {
        try {
            const response = await fetch('https://shau1921.pythonanywhere.com/api/v1/damirsinbachasti')
            const json = await response.json()
            setData(json)

        } catch (e) {
            console.log(e)
        }

    }




    useEffect(() => {
        getdata().then(function(){
        })
    }, []);

    let erorCount:number = 0;

    for(let i = 0; i < 20; i++){
        if(data[i]['id'] == params.id) {
            url = data[i]
            break;
        } else {
            erorCount++;
        }
    }

    if(erorCount === data.length) {
        return (<Eror/> )
    }

    if(params.id === 8 ||params.id === 9 || params.id === 10 ) {
        return (<>

            <iframe src="https://vk.com/video_ext.php?oid=-201718799&id=456239032&hash=83a11c63df5096f6&hd=2"
                    width="100%" height="800" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                     allowFullScreen></iframe>
        </> )
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

export default Page;