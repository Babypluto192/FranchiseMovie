import classes from "./home.module.scss";

export default function Home ()  {
    return ( <>
            <audio src="/main.mp3" autoPlay  className={classes.audio}></audio>
            <h1 className={classes.h1}>
                Это главная страничка Дамирсынба
            </h1>
            <p className={classes.p}>
                Что бы посмотреть другие разделы нажимайте сверху на ПК или откройте меню на телефонах.
            </p>
        </>

    );
};
