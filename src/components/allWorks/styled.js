import styled from "styled-components";

export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 25px 13px;
  box-sizing: border-box;
  align-items: center;
  border: 1px #f0f1f1 solid;
`;

export const ImageBlock = styled.div`
  width: 25%;
  min-width: 80px;
  height: 80px;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Button = styled.div`
  width: 40%;

  @media (max-width: 550px) {
    width: 20%;
  }
`;

export const FavoritIcon = styled.img`
  min-width: 30px;

  @media (max-width: 550px) {
    width: 20%;
  }
`;

export const ContentHolder = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  text-align: left;
  width: 70%;
  color: #393939;
  margin-left: 15px;
`;
export const TitleItem = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: normal;
  text-overflow: ellipsis;
`;
export const Artist = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: normal;
  text-overflow: ellipsis;
  color: #e0a449;
`;
