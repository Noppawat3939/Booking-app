import React from "react";
import {
  InputCon,
  Container,
  InputMail,
  Sub,
} from "../styles/EmailList_styled";

function EmailList() {
  return (
    <Container>
      <h1>Save time, save money!</h1>
      <h2>Sign up and we'll send the best deals to you</h2>
      <InputCon>
        <InputMail type="email" placeholder="Your email" />
        <Sub>Subscribe</Sub>
      </InputCon>
      <InputCon>
        <input type="checkbox" />
        <p>Send me a link to get the FREE GGBooking.com app!</p>
      </InputCon>
    </Container>
  );
}

export default EmailList;
