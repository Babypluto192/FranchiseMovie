import NextImage from "next/image";

interface IpropsType {
    nagradi: string[]
}
const Nagradi = ( props: IpropsType) => {
    const awards:string[] = props.nagradi

    return (
        <div>
            {awards.map((el,index) => (
                <ul key={index}>
                    <li>
                        <NextImage src={el} alt={String(el)} width={400} height={200}/>
                    </li>


                </ul>


            ))}
        </div>
    );
};

export default Nagradi;