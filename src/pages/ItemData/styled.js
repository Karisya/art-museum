import styled from "styled-components";

export const Card = styled.div`
  padding: 120px 0;
  display: flex;
  @media (max-width: 800px) {
    padding: 60px 0;
  }

  @media (max-width: 600px) {
    padding: 30px 0;
  }
`;
export const Loading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 25px;
  padding: 200px 0;
`;

export const Div = styled.div`
  display: flex;
  column-gap: 80px;
  @media (max-width: 800px) {
    column-gap: 40px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 1.25;
  color: #393939;
  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ImageBlock = styled.div`
  max-height: 600px;
  width: 60%;

  @media (max-width: 800px) {
    max-height: 400px;
  }

  @media (max-width: 600px) {
    max-height: 300px;
    width: 100%;
    text-align: center;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Artist = styled.div`
  color: #e0a449;
  font-size: 24px;
  line-height: 1.25;
  @media (max-width: 800px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Data = styled.div`
  font-weight: 700;
  line-height: 1.25;
`;
export const Info = styled.div`
  color: #e0a449;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  p {
    display: flex;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Overview = styled.div`
  margin-bottom: 32px;
  font-size: 32px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
