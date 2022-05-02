import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import styled from "styled-components";
import Properties from "../components/Properties";
import EmailList from "../components/EmailList";
import HomeGuests from "../components/HomeGuests";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HomeCon>
        <Featured />
        <Properties />
        <HomeGuests />
      </HomeCon>
      <EmailList />
      <Footer />
    </div>
  );
}

export default Home;

export const HomeCon = styled.div`
  max-width: 90%;
  margin: 1rem auto;
`;
