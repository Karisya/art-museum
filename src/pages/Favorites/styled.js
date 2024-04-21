import styled from "styled-components";

export const Title = styled.h2`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 120px;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    font-size: 54px;
    margin-bottom: 70px;
  }
  @media (max-width: 764px) {
    font-size: 34px;
    margin-bottom: 30px;
    img {
      width: 30px;
    }
  }

  @media (max-width: 500px) {
    font-size: 25px;
    margin-bottom: 20px;
    img {
      width: 20px;
    }
  }
`;

export const Span = styled.span`
  color: #f17900;
`;

export const Note = styled.div`
  color: #e0a449;
`;

export const Header = styled.div`
    font-size:32px;
    color:#393939;
    margin-bottom:40px;
    @media (max-width: 764px) {
        font-size:20px;
`;

export const Content = styled.div`
  text-align: center;
`;
