
import classes from "./trailer.module.scss";

export default  function Page () {
    return (
        <div>

            <h1 className={classes.h1}>Это Трейлеры Дамирсынба</h1>
            <audio src="/jhoncena.mp3" autoPlay className={classes.audio} ></audio>
        </div>
    );
};
