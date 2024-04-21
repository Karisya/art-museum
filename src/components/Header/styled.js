import styled from "styled-components";

// position:absolute;
export const HeaderBlock = styled.div`
  background: linear-gradient(to right, #343333, #484848, #282828);

  @media (max-width: 500px) {
    z-index: 999;
  }
`;

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

export const FavoritesBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1.21;
  gap: 4px;
  color: #fff;

  @media (max-width: 764px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.div`
  @media (max-width: 764px) {
    width: 150px;
  }

  @media (max-width: 500px) {
    z-index: 66;
  }
`;
export const Favorites = styled.img`
  width: 30px;
`;
export const MenuContainer = styled.nav`
  position: relative;
`;

export const MenuBody = styled.div`
  @media (max-width: 500px) {
    overflow: auto;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #393939;
    left: -100%;
    transition: left 0.3s ease 0s;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }
`;

export const MenuList = styled.ul`
  display: none;
  @media (max-width: 500px) {
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 10px;
    span {
      font-size: 25px;
      color: #fff;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    background: none;
    flex: 0 0 30px;
    height: 18px;
    position: relative;
    z-index: 5;

    span,
    span::before,
    span::after {
      content: "";
      right: 0;
      position: absolute;
      width: 100%;
      height: 4px;
      background: #e0a449;
      transition: all 0.3s ease 0s;
    }

    span::before {
      top: 0;
      margin-top: 10px;
    }
    span::after {
      margin-bottom: 10px;
      bottom: 0;
    }
    span {
      top: calc(50% - 1px);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HomeBlock = styled.div`
  color: #fff;
  @media (max-width: 500px) {
    display: none;
  }
`;
