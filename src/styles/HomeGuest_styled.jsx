import styled from "styled-components";

export const Wraper = styled.div`
  margin: 10px 0;

  h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .slide > button {
    background-color: ${({ theme }) => theme.bgColor.body};
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.07);
    border: 1px solid whitesmoke;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 0.5rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .slide > button::before {
    color: lightgray;
    font-size: 30px;
    line-height: 40px;
    opacity: 1;
  }
`;

export const HeaderInfo = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 14px;
    color: ${({ theme }) => theme.fontColor.body};
    font-weight: 500;
    text-transform: capitalize;
  }

  > h4 {
    font-size: 14px;
    color: ${({ theme }) => theme.fontColor.desc};
    font-weight: 500;
    text-transform: capitalize;
  }

  > h2 {
    font-size: 13px;
    color: ${({ theme }) => theme.fontColor.body};
    font-weight: 600;
  }
`;

export const Span = styled.span`
  display: flex;
  column-gap: 5px;
  align-items: center;
  font-size: 13px;
  text-transform: capitalize;

  > button {
    background-color: ${({ theme }) => theme.bgColor.main};
    border: 0;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    border-bottom-left-radius: 0;
  }

  > p {
    color: ${({ theme }) => theme.fontColor.desc};
    text-transform: none;
    margin-left: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SlideCon = styled.div`
  padding: 0 10px;
`;
export const Image = styled.img`
  width: 95%;
  height: 250px;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    height: 180px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 120px;
  }
`;
