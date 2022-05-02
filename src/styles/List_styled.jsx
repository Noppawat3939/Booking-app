import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const ListCon = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  padding: 20px;

  > button {
    background: linear-gradient(to top, #ffac41, #ffd369);
    padding: 6px 10px;
    color: #fff;
    border: 0;
    z-index: 10;
    text-align: end;
    font-size: 24px;
    width: 70px;
    border-radius: 30px;
    transform: translateX(-3rem);
    height: fit-content;
    position: sticky;
    top: 6rem;
    display: none;
    margin-right: -4rem;
    box-shadow: 1px 2px 6px 2px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    column-gap: 0;
    background-color: #fff;

    > button {
      display: block;
    }
  }
`;

export const SearchCon = styled.div`
  background: linear-gradient(to top, #ffac41, #ffd369);
  padding: 20px;
  border-radius: 8px;
  max-width: fit-content;
  position: sticky;
  top: 6rem;
  height: fit-content;

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: #fff;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    position: fixed;
    left: ${({ showSearch }) => (showSearch ? "50%" : "-100%")};
    top: 25%;
    transform: translateX(-50%);
    z-index: 100;
    transition: 0.4s ease;
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 13px;

  > input {
    padding: 5px;
    border-radius: 4px;
  }

  > div {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  > div > input {
    width: 40px;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
  }
`;

export const Span = styled.span`
  background-color: #fff;
  font-size: 14px;
  padding: 5px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.fontColor.desc};
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.fontColor.title};
  margin-bottom: 5px;
`;

export const Search = styled.button`
  background-color: ${({ theme }) => theme.bgColor.main};
  border: 0;
  width: 100%;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  letter-spacing: 2px;
  font-size: 17px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bgColor.main_alt};
  }
`;

export const Icon = styled(AiOutlineSearch)`
  font-size: 20px;
  margin-right: 5px;
  color: ${({ theme }) => theme.fontColor.title};
`;
