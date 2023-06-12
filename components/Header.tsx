"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import classes from "./style/header.module.scss";
import {useTheme as useNextTheme} from 'next-themes'
import {createTheme, Switch, useTheme} from '@nextui-org/react'
import React from "react";

export default function Header () {


    const lightTheme = createTheme({
        type: 'light',
        theme: {
            colors: {background: "white",},
        }
    })

   const darkTheme = createTheme({
        type: 'dark',
        theme: {
            colors: {background: "#212121", text: "white"},
        }
    })
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    return (


        <Navbar bg="light" expand="lg">


                <img
                    src="/SYH4dAPuuZA__1_-removebg-preview.png"
                    alt="" className={classes.img}/>
                <Link href={'/'} className="navbar-brand"> Дамирсынба </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href={'/patchnote'} className="nav-link active" > Патчноут  </Link>
                        <Link className="nav-link active" href={"/lore"}>Лор </Link>
                        <NavDropdown title="Части" id="basic-nav-dropdown">

                                <Link href={'/osnovniye'} className="dropdown-item" > Основная вселеная  </Link>

                            <Link href={'/spinOff'} className="dropdown-item" >  Спин-Оффы</Link>


                            <Link href={"/trailer"} className="dropdown-item"> Трейлер </Link>

                            <NavDropdown.Divider />
                            <Link href={'/fanati'} className="dropdown-item"> Фанатская дейтельность </Link>
                        </NavDropdown>
                        <Link className="nav-link active" href={"/rating"} >Рейтинг</Link>
                        <Link className="nav-link active" href={"/forum"} >Форум (тестовая функция)</Link>
                        <Link className="nav-link active" href={"/"}> Текущая тема {type}</Link>
                        <Switch
                            checked={isDark}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                        />
                    </Nav>

                </Navbar.Collapse>

        </Navbar>



    );
};
