import styled from "styled-components";

export const LoginCon = styled.div`
  margin: 2rem auto 5rem;
  max-width: 400px;
  max-height: max-content;
  color: ${({ theme }) => theme.fontColor.body};

  > h2 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 10px;
  }

  > p {
    color: ${({ theme }) => theme.fontColor.desc};
    font-size: 14px;
    position: relative;
    text-align: center;
    margin-bottom: 20px;
  }

  > p::after {
    content: "";
    position: absolute;
    width: 25%;
    top: 50%;
    right: 0;
    height: 1px;
    background-color: lightgray;
  }

  > p::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 25%;
    height: 1px;
    background-color: lightgrey;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 90%;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  > label {
    text-transform: capitalize;
    font-size: 14px;
    letter-spacing: 1.2px;
  }
`;

export const Input = styled.input`
  border: 1px solid lightgray;
  max-width: 400px;
  height: 35px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;

  :focus {
    border-color: ${({ theme }) => theme.borderColor.main};
  }

  ::placeholder {
    letter-spacing: 1.2px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.bgColor.main};
  width: 100%;
  padding: 10px 20px;
  color: #fff;
  border: 0;
  font-size: 16px;
  border-radius: 4px;
  margin: 10px 0 20px;

  &:hover {
    background-color: ${({ theme }) => theme.bgColor.main_alt};
  }
`;

export const IconCon = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  > svg {
    font-size: 45px;
    border: 1px solid lightgray;
    padding: 10px;
    opacity: 0.6;

    &:hover {
      color: ${({ theme }) => theme.fontColor.main};
      opacity: 1;
    }
  }
`;

export const LoginBottom = styled.div`
  text-align: center;

  > h4 {
    color: ${({ theme }) => theme.fontColor.main};
    font-size: 15px;
    margin-bottom: 20px;
  }

  > div {
    font-size: 13px;
    color: ${({ theme }) => theme.fontColor.desc};
    border-top: 1px solid lightgray;
    padding: 20px 0;
    line-height: 1.3rem;

    > span {
      color: ${({ theme }) => theme.fontColor.main};
    }
  }
`;
