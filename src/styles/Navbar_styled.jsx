import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${({ changeNav }) =>
    changeNav ? "#5534a5" : "transparent"};
  transition: 0.4s all;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: ${({ changeNav }) =>
    changeNav ? "0 0 6px 2px rgba(0,0,0,.25)" : "none"};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: capitalize;

  a {
    color: #fff;
  }
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

export const Signin = styled(NavLink)`
  background-color: transparent;
  border: #fff 1px solid;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.fontColor.main};
  }
`;

export const UserLogin = styled.div`
  padding: 2px 6px;
  transition: 0.3s ease-in-out;
  border-radius: 3px;
  color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  border: 1px solid transparent;
  font-size: 14px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  > p {
    font-weight: 600;
    display: flex;
    align-items: center;

    > svg {
      font-size: 20px;
      margin-right: 5px;
      color: lightgrey;
    }
  }

  > a {
    color: #ffac41 !important;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: 500;
    width: fit-content;
    cursor: pointer;
  }
`;
