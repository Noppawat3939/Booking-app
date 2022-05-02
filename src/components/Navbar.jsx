import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import {
  Nav,
  Container,
  Logo,
  Buttons,
  UserLogin,
  Signin,
} from "../styles/Navbar_styled";
import { useGlobalContext } from "../context/context";

function Navbar() {
  const { user, removeUserLocalStorage } = useGlobalContext();
  const [changeNav, setChangeNav] = useState(false);

  const controlNav = () => {
    if (window.scrollY > 100) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <Nav changeNav={changeNav}>
      <Container>
        <Logo>
          <NavLink to="/">GG booking</NavLink>
        </Logo>
        <Buttons>
          {user ? (
            <UserLogin>
              <p>
                <FaUserCircle />
                {user?.name}
              </p>
              <a href="/" onClick={removeUserLocalStorage}>
                Sign out <VscSignOut />
              </a>
            </UserLogin>
          ) : (
            <Signin to="login">
              Sign in <VscSignIn />
            </Signin>
          )}
        </Buttons>
      </Container>
    </Nav>
  );
}

export default Navbar;
