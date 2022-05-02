import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;

  h1 {
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  margin: 1rem 0;
`;

export const SliderCon = styled.div`
  height: max-content;

  > h2 {
    font-size: 17px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.fontColor.body};
    margin-bottom: 5px;
  }

  > p {
    color: ${({ theme }) => theme.fontColor.desc};
    letter-spacing: 1.2px;
    font-size: 15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    > h2 {
      font-size: 15px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const ImageCon = styled.div`
  height: 200px;
  border-radius: 3px;
  overflow: hidden;
  width: 95%;
  margin-bottom: 10px;

  &:hover > img {
    transform: scale(1);
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
  transform: scale(1.1);
`;
