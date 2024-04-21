import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-height: 444px;
  max-width: 390px;
  position: relative;

  @media (max-width: 764px) {
    max-height: 300px;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageBlock = styled.div`
  position: relative;
  height: 100%;
`;

export const Info = styled.div`
  position: absolute;
  bottom: -15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 24px;
  left: 5%;
  width: 80%; /* Уберем лишнее свойство width */
  background-color: #fff;
  border: #f0f1f1 1px solid;
  height: 132px;

  @media (max-width: 1024px) {
    padding: 10px 14px;
  }

  @media (max-width: 930px) {
    display: block;
    width: 90%;
    left: 0;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  width: 70%;
  overflow: hidden;

  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const ArtistTitle = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  overflow: hidden;
  font-size: 18px;
  color: #181818; /* Исправим значение цвета */

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const Artist = styled.div`
  letter-spacing: -1%;
  color: #e0a449;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Public = styled.div`
  letter-spacing: -1%;
  font-weight: 700; /* Исправим опечатку */
  color: #393939;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Favorites = styled.div`
  width: 30%;
  @media (max-width: 1024px) {
    width: 40px;
    margin: 0 auto;
  }
`;
