import classes from "./style/movie.module.scss"
import NextImage from 'next/image';
import Link from "next/link";

interface Imovie {
    id: number
    title: string
    rating: number
    url: string
    preview: string
}



const Movie = (props:Imovie) => {
    let film:string

    if(props.id <= 20) {
        film = 'фильма'
    } else if(props.id > 20 && props.id <= 40) {
        film = 'спин-оффа'
    } else if(props.id > 40 && props.id <= 48) {
        film = 'трейлера'
    } else {
        film = 'фаната'
    }
    return (
        <div   key={props.id}>
            <NextImage src={props.preview} alt={props.title} width={400}  height={400} className={classes.img}>

            </NextImage>
            <p>
                {props.title}
            </p>
            <p>
               Рейтинг {film} {props.rating} из 10
            </p>

           <Link className="btn btn-secondary" href={`/player/${props.id}`}>
                Смотреть
            </Link>



        </div>
    );
};

export default Movie;