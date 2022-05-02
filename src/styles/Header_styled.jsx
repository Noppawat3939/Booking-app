import styled from "styled-components";

export const HeaderCon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageCon = styled.div`
  max-height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: 100%;
  }
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    bottom: 0.5em;
    left: 0.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: capitalize;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bgColor.main_alt};
  color: #fff;
  border: 0;

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 6px 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

export const Info = styled.p`
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const HeaderSearch = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: gray;
  border-radius: 50px;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 20px;
  max-width: 960px;
  margin: auto;
  position: relative;
  transform: translateY(-2rem);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-width: 90%;
    transform: translateY(-0.5rem);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    row-gap: 25px;
    border-radius: 8px;
  }
`;

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;

  .date {
    position: absolute;
    top: 60px;
    z-index: 2;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Input = styled.input`
  border: 0;
  padding: 3px;
  outline: none;
  ::placeholder {
    letter-spacing: 1px;
  }
`;

export const OptionsCon = styled.ul`
  position: absolute;
  top: 60px;
  background: #fff;
  box-shadow: 1px 2px 6px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 20%;
  padding: 10px;
  z-index: 2;
`;

export const OptionChoice = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 13px;

  > div {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div > button {
    width: 20px;
  }

  > div > span {
    width: 20px;
    color: #000;
    font-size: 15px;
    text-align: center;
  }
`;
