import styled from "styled-components";

export const SearchListCon = styled.div`
  margin-left: 20px;
  max-width: 95%;
  margin: auto;

  > h2 {
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const Left = styled.div`
  display: flex;
  column-gap: 20px;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const ImageCon = styled.div`
  max-width: 200px;
  max-height: 200px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-size: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 180px;
    max-height: 120px;
    margin: 0 auto;
  }
`;

export const Info = styled.div`
  max-width: 80%;
  margin: 0 auto;

  > h3 {
    color: ${({ theme }) => theme.fontColor.main};
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;

    > span {
      display: flex;
    }

    > span > svg {
      color: #ffac41 !important;
      font-size: 18px;
      margin-left: 5px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    margin: auto;

    > h3 {
      justify-content: center;
    }

    > h3 > span {
      display: none;
    }
  }
`;

export const Position = styled.ul`
  display: flex;
  width: max-content;

  > li {
    list-style: none;
    font-size: 12px;
    margin-right: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RoomInfo = styled.div`
  border-left: 2px solid lightgray;
  padding: 5px 8px;
  font-size: 13px;
  margin-top: 10px;

  > ul > li {
    list-style: none;
    margin-bottom: 5px;
  }

  > ul > li:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.fontColor.body};
    text-transform: capitalize;
  }

  > ul > li:last-child {
    color: ${({ theme }) => theme.fontColor.desc};
  }

  > h4 {
    color: forestgreen !important;
    font-size: 13px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 0;
    border: 0;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    width: 100%;
  }
`;

export const Rate = styled.div`
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  > div {
    display: flex;
    column-gap: 10px;
    width: max-content;

    > button {
      width: 30px;
      height: 30px;
      padding: 5px;
      background-color: ${({ theme }) => theme.bgColor.main};
      color: #fff;
      border: 0;
      border-radius: 4px;
      border-bottom-left-radius: 0;
    }

    span {
      text-align: end;
      margin-bottom: 5px;
      font-weight: 500;

      > p {
        font-size: 13px;
        color: ${({ theme }) => theme.fontColor.desc};
      }
    }
  }

  > h3 {
    color: ${({ theme }) => theme.fontColor.main};
    font-size: 15px;
    text-transform: capitalize;
  }

  > span {
    color: #ffac41 !important;
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 0.5rem;
    right: -1rem;
    background: rgb(255 255 255 / 0.5);
    backdrop-filter: blur(3px);
    padding: 5px;
    border-radius: 4px;
    border: 1px solid rgb(255 255 255 / 0.5);
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.05);
    align-items: center;

    > h3 {
      font-size: 12px;
    }

    > span {
      display: flex;
    }
  }
`;

export const Price = styled.div`
  text-align: end;
  margin-top: 20px;

  > p {
    font-size: 13px;
    color: ${({ theme }) => theme.fontColor.desc};
    margin-bottom: 5px;
  }

  > h3 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
  }

  > button {
    background-color: ${({ theme }) => theme.fontColor.main};
    color: #fff;
    display: inline-flex;
    align-items: center;
    border: 0;
    padding: 10px 15px;
    width: max-content;

    > svg {
      margin-left: 5px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    margin: 1rem auto 0;
  }
`;
