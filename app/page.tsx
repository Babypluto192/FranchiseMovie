import classes from "./home.module.scss";
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Franchise Site',
};
export default function Home ()  {
    return ( <>

            <h1 className={classes.h1}>
                Это главная страничка
            </h1>
            <p className={classes.p}>
                Что бы посмотреть другие разделы нажимайте сверху на ПК или откройте меню на телефонах.
            </p>
        </>

    );
};
