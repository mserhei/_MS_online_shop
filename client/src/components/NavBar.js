import React from "react";
import { useContext } from "react";
import { Context } from "../index";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {Container} from 'react-bootstrap';

import { SHOP_ROUTE } from "../utils/consts";

import {useHistory} from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          ONLINER
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
            <Button variant={"outline-light"} className="ml-2"  onClick={() => history.push(LOGIN_ROUTE)}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
