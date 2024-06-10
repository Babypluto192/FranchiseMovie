import classes from "./home.module.scss";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'О нас',
};
export default function Home() {
    return (
        <>
            <h1 className={classes.h1}>
                Привет, пользователь
            </h1>
            <p className={classes.p}>
                Добро пожаловать на наш сайт для бронирования культурных мероприятий! Мы - ваш путеводитель в мир
                культуры, искусства и развлечений. Наши страницы наполнены увлекательными возможностями для всех
                ценителей культурного наследия и тех, кто жаждет новых впечатлений.
                Здесь вы найдете разнообразные мероприятия от лучших театров, музеев, галерей и музыкальных площадок. От
                классических оперных постановок до передовых выставок современного искусства - мы предлагаем мероприятия
                на любой вкус и для всех возрастов.
                Бронируйте билеты на свои любимые события в несколько кликов - наш удобный интерфейс поможет вам легко и
                быстро выбрать и забронировать места. И не забывайте следить за нашими специальными предложениями и
                акциями - у нас всегда найдется что-то особенное для наших гостей.
                Погрузитесь в мир искусства вместе с нами и создайте незабываемые впечатления!
            </p>
            <div className={classes.imageContainer}>
                <img src="https://avatars.dzeninfra.ru/get-zen_doc/1862846/pub_64e5ac3d09ae497c42a207af_64e5ac45b619407c644b1e41/scale_1200" alt="Description of image 1" className={classes.image}/>
                <img src="https://levelup-ufa.ru/upload/medialibrary/fca/nqq3lm0p2igwnt3xxklcwai5wy41gq5z.jpg" alt="Description of image 2" className={classes.image}/>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-square">
                        <p>Техническая поддержка: support@example.com</p>
                        <div className="social-icons">
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/discord.png" alt="Discord" className="icon"/>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/telegram.png" alt="Telegram" className="icon"/>
                            </a>
                            {/* Добавьте другие иконки по аналогии */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};
