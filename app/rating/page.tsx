import classes from "./rating.module.scss";

export default  function rating ()   {
    return (
        <div>

            <h1 className={classes.h1}>Это Рейтинг</h1>
            <audio src="/jhoncena.mp3" autoPlay className={classes.audio} ></audio>
        </div>
    );
};
