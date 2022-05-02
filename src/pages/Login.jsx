import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { BsGoogle, BsFacebook, BsPhone } from "react-icons/bs";
import {
  LoginCon,
  InputBox,
  Input,
  Button,
  IconCon,
  LoginBottom,
} from "../styles/Login_styled";
import { useGlobalContext } from "../context/context";

const Login = () => {
  const { setUser } = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username && !email && !password) return;
    setUser({ name: username, email: email });
    navigate("/");
  };

  return (
    <div>
      <Header display="none" />
      <LoginCon>
        <h2>Sign in or create an accout</h2>
        <form action="submit" onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor="username">username</label>
            <Input
              type="text"
              placeholder="Your name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="email">email address</label>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
          </InputBox>
          <InputBox>
            <label htmlFor="username">password</label>
            <Input
              type="password"
              placeholder="Your password at least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
            />
          </InputBox>
          <Button type="submit">login</Button>
        </form>
        <p>or use one of these options</p>
        <IconCon>
          <BsGoogle />
          <BsFacebook />
          <BsPhone />
        </IconCon>
        <LoginBottom>
          <h4>More ways to sign in</h4>
          <div>
            By signing in or creating an account, you agree with out{" "}
            <span>Term & conditions</span> and <span>Privacy statement</span>
          </div>
          <br />
          <div>
            All rights reserved. Copyright {new Date().getFullYear()} - GG
            Booking
          </div>
        </LoginBottom>
      </LoginCon>
    </div>
  );
};

export default Login;
