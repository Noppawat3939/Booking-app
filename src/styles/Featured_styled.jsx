import styled from "styled-components";

export const FeaturedCon = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

export const Container = styled.div`
  width: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

export const ImageCon = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

  h1 {
    text-transform: capitalize;
    letter-spacing: 3px;
    font-size: 20px;
  }

  h3 {
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
  }
`;
