import Idata from "@/app/osnovniye/Idata";


export default async function Page ({ params }: { params: { slug: string } })  {

    let ApiUrl:string = 'https://shau1921.pythonanywhere.com/api/v1/damirsinbachasti'
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



    let a:string

    for(let i = 0; i < data.length; i++){
        if(params.slug.at(-2) === '1' || params.slug.at(-2) === '2') {


            a = params.slug.at(-2) + params.slug.at(-1) ?? '12'

            if(a == data[i].id) {
                return  (  <iframe width="100%" height="800" src={data[i].url}
                                   title="YouTube video player"
                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                   allowFullScreen></iframe>
                )

            }
        } else {
            if(params.slug.at(-1) == data[i].id) {
                return (
                    <iframe width="100%" height="800" src={data[i].url}
                               title="YouTube video player"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               allowFullScreen></iframe>
                )
            }
        }

    }







};
