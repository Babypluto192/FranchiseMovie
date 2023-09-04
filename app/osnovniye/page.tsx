import classes from "./osnovniye.module.scss";
import Movie from "../../components/Movie"


export default  function Osnovniye ()  {







    return (
        <div>

            <h1 className={classes.h1}>Это Основные части </h1>

            <Movie  title='title' rating='rating' url='https://youtu.be/dQw4w9WgXcQ?si=iQU9RDsgX2wjxg-2' preview='https://whey.kz/wp-content/uploads/2020/11/placeholder.png' film="фильма"/>




        </div>
    );
};