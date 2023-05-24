"use client"; // This is a client component
import 'bootstrap/dist/css/bootstrap.min.css';

import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import classes from "./style/header.module.scss";


export default function Header () {
    return (
        <div>
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
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
        </div>
    );
};
