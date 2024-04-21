import styled from "styled-components";

export const Content = styled.div`
  max-height: 127px;
  box-sizing: border-box;
  display: flex;
  padding: 32px 0px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 764px) {
    padding: 20px 0;
  }
`;

export const Logo = styled.div`
  @media (max-width: 764px) {
    width: 150px;
  }
`;

export const Block = styled.div``;
