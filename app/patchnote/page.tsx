import classes from "./patchnote.module.scss";

export default  function patchnote ()   {
    return (
        <div>

            <h1 className={classes.h1} >Это Патч ноут Дамирсынба</h1>
            <audio src="/patchnote.mp3" autoPlay  className={classes.audio}></audio>
        <div>
            <ul className={classes.ul} > <h3 className={classes.h3}> 7.0 Релиз сайта</h3>
                <li>
                    Добавлен новый интерфейс
                </li>
                <li>
                    Добавлен патч ноут
                </li>

                <li>
                   НОВАЯ ФУНКЦИЯ Форум отправляйте сообщение на форуме дамирсынба!
                </li>

            </ul>


        </div>
        </div>
    );
};
