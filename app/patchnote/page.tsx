import classes from "./patchnote.module.scss";

export default  function patchnote ()   {
    return (
        <div>

            <h1 className={classes.h1} >Это Патч ноут Дамирсынба</h1>
            {/*<audio src="/jhoncena.mp3" autoPlay  className={classes.audio}></audio>*/}
        <div>
            <ul className={classes.ul} > <h3 className={classes.h3}> 2.0 Самая первая версия сайта</h3>
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

                <li>
                   ТЕСТОВАЯ ФУНКЦИЯ Форум отправляйте сообщение на форуме дамирсынба!
                </li>

            </ul>

            <ul> <h4> 3.0 ЛОР ЛОР ЛОР!</h4>
                <li>
                    Улучшен лор Дамирсынба
                </li>
                <li>
                    Исправлено большенство ошибок
                </li>
                <li>
                    Дописаны те части которых не было
                </li>
                <li>
                    Добавлено разделение по частям а так же по трилогиям
                </li>
                <li>
                   В будущем будет допилен лор Дамирсынба
                </li>
            </ul>
        </div>
        </div>
    );
};
