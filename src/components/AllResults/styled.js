import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  margin-bottom: 95px;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 764px) {
    gap: 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  padding: 8px 12px;
  margin-right: 5px;
  border: 1px solid #e0a449;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#E0A449" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};

  &:active {
    background-color: #e0a449;
  }

  &:hover {
    background-color: ${({ active }) => (active ? "#E0A449" : "#f0f0f0")};
  }
`;

export const Sort = styled.div`
  width: 30px;
  margin-left: auto;
`;

export const Prev = styled.img`
  transform: rotate(180deg);
`;

export const StyledButton = styled(Button)`
  background-color: ${({ active }) => (active ? "#E0A449" : "#fff")};
  color: ${({ active }) => (active ? "white" : "black")};
`;
