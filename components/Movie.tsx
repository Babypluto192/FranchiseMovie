import {Container} from "reactstrap";
import classes from "./style/movie.module.scss"
import NextImage from 'next/image';

interface Imovie {
    id: number
    title: string
    rating: number
    url: string
    preview: string
}


const Movie = (props:Imovie) => {
    return (
        <Container key={props.id}>
            <NextImage src={props.preview} alt={props.title} width={400}  height={400} className={classes.img}>

            </NextImage>
            <p>
                {props.title}
            </p>
            <p>
                {props.rating}
            </p>

        </Container>
    );
};

export default Movie;