import Idata from "@/app/osnovniye/Idata";

let url:any
export default async function Page ({ params }: { params: { slug: string } })  {
    let ApiUrl:string
    if(params.slug.startsWith("damirsinbachasti")) {
        ApiUrl = "https://shau1921.pythonanywhere.com/api/v1/damirsinbachasti"
    } else if(params.slug.startsWith("damirsinbafanati")) {
        ApiUrl = "https://shau1921.pythonanywhere.com/api/v1/damirsinbafanati"
    } else if(params.slug.startsWith("damirsinbatrailers")) {
        ApiUrl = "https://shau1921.pythonanywhere.com/api/v1/damirsinbatrailers"
    } else {
        ApiUrl = "https://shau1921.pythonanywhere.com/api/v1/damirsinbaspinoff"
    }
    async function getData() {
        const res = await fetch(ApiUrl)

        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        return res.json()
    }




    const data:Idata[] = await getData()




    for(let i = 0; i < data.length; i++){

        if(params.slug.at(-2) !== '1' && params.slug.at(-2) !== '2'){
            if(  params.slug.at(-1) == data[i]['id'] ) {
                url = data[i]
                break;
            }
        } else {
            let a:string

                a = params.slug.at(-2) ?? '1' + params.slug.at(-1) ?? '2'


            if( a == data[i]['id'] ) {
                url = data[i]
                break;
            }
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
