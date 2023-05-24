import classes from "./osnovniye.module.scss";


export default function Osnovniye ()  {
    return (
        <div>

            <h1 className={classes.h1}>Это Основные части Дамирсынба</h1>
            <audio src="/jhoncena.mp3" autoPlay className={classes.audio} ></audio>
        </div>
    );
};