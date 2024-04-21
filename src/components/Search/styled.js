import styled from "styled-components";

export const Input = styled.input``;

export const SearchContent = styled.section`
  padding: 120px;
  text-align: center;

  @media (max-width: 964px) {
    padding: 60px;
  }

  @media (max-width: 764px) {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 1.25;
  color: #393939;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 964px) {
    font-size: 40px;
  }

  @media (max-width: 764px) {
    font-size: 35px;
  }
`;

export const Span = styled.span`
  color: #f17900;
`;

export const SearchForm = styled.div`
  display: flex;
  max-width: 762px;
  margin: 0 auto;
  height: 64px;
  padding: 16px;
  border-radius: 16px;
  justify-content: space-between;
  background-color: rgba(57, 57, 57, 0.05);
`;
