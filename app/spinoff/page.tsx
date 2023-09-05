import classes from "./spinoff.module.scss";
import Movie from "../../components/Movie"

export default async function SpinOff ()  {


    return (
        <div>

            <h1 className={classes.h1}>Это Спин-Оффы </h1>

            <Movie  title='title' rating='rating' url='https://youtu.be/dQw4w9WgXcQ?si=iQU9RDsgX2wjxg-2' preview="https://whey.kz/wp-content/uploads/2020/11/placeholder.png" film="фильма" id='1' />



        </div>
    );
};