import classes from "./patchnote.module.scss";
export default  function patchnote ()   {
    return (
        <div>

            <h1 className={classes.h1} >Это Патч ноут Дамирсынба</h1>
            <audio src="/jhoncena.mp3" autoPlay  className={classes.audio}></audio>
        <div>
            <ul className={classes.ul} > <h3 className={classes.h3}>  0.01 Самая первая версия сайта</h3>
                <li>
                    Добавлен новый интерфейс
                </li>
                <li>
                    При переходе на страницу добавлен временый звук
                </li>

                <li>
                    поменяны расположние названий страниц
                </li>

                <li>
                    Добавлен патч ноут
                </li>

            </ul>
        </div>
        </div>
    );
};
