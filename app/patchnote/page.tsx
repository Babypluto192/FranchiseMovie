"use client"
import React, { useState, useEffect } from "react";
import classes from "./patchnote.module.scss";

interface Event {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

const PatchNote: React.FC = () => {
    const [meropriyatiya, setMeropriyatiya] = useState<Event[]>();

    useEffect(() => {
        fetch('http://localhost:4000/meropritiya')
            .then(response => response.json())
            .then((data: Event[]) => {
                console.log('Мероприятия:', data);
                setMeropriyatiya(data);
            })
            .catch(error => console.error('Ошибка:', error));
    }, []);

    return (
        <div>
            <h1 className={classes.h1}>Мероприятия</h1>
            <audio src="/patchnote.mp3" autoPlay className={classes.audio}></audio>
            <div className={classes.gridContainer}>
                {meropriyatiya ?
                    meropriyatiya.map(event => (
                        <div key={event.id} className={classes.card}>
                            <img src={"http://localhost:4000/" + event.image} alt={event.title} className={classes.image} />
                            <div className={classes.cardContent}>
                                <h3 className={classes.h3}>{event.title}</h3>
                                <p>{event.description}</p>
                                <p>{event.date}</p> {/* Добавляем вывод даты */}
                                <button className={classes.button}>Подробнее</button>
                            </div>
                        </div>
                    )) : <></>}
            </div>
        </div>
    );
};

export default PatchNote;
