import classes from "./patchnote.module.scss";

export default  function patchnote ()   {
    return (
        <div>

            <h1 className={classes.h1} >Это Патч ноуты сайта</h1>
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
                   НОВАЯ ФУНКЦИЯ Форум отправляйте сообщение на форуме
                </li>

            </ul>

            <ul className={classes.ul} > <h3 className={classes.h3}> 7.1 Обновление базы фильмов</h3>
                <li>
                   Обновлена база фильмов для более удобной работы
                </li>
                <li>
                   Остальные изменения выйдут позже
                </li>

            </ul>



        </div>
        </div>
    );
};
