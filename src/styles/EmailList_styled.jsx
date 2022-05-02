import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor.main_alt};
  color: #fff;
  text-align: center;
  padding: 30px 0;

  > h1 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
  }

  > h2 {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const InputCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  max-width: 450px;
  height: 45px;

  :nth-of-type(2) {
    justify-content: start;
    background-color: transparent;
    height: fit-content;
  }

  > p {
    font-size: 14px;
    margin-left: 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 90%;
  }
`;

export const Sub = styled.button`
  height: 100%;
  flex: 0.25;
  margin-left: 5px;
  border-radius: 3px;
  font-size: 18px;
  border: 0;
  font-weight: 300;
  color: #fff;
  background-color: ${({ theme }) => theme.bgColor.main};
`;

export const InputMail = styled.input`
  width: 100%;
  height: 100%;
  flex: 0.75;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 18px;

  ::placeholder {
    font-size: 18px;
    letter-spacing: 2px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex: 0.7;
  }
`;
