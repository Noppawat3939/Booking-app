import styled from "styled-components";

export const FooterCon = styled.div`
  text-align: center;
  padding: 20px;

  > h3 {
    font-size: 15px;
    color: ${({ theme }) => theme.fontColor.desc};
    margin-bottom: 10px;
  }

  > small {
    color: ${({ theme }) => theme.fontColor.body};
    letter-spacing: 1px;
  }

  > p {
    color: ${({ theme }) => theme.fontColor.desc};
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const ImageCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  margin: 1rem 0;
`;

export const Image = styled.img`
  max-height: 50px;
  transition: 0.3s ease-in-out;
  border: 1px solid transparent;
  border-radius: 6px;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    border-color: #eee;
  }
`;
