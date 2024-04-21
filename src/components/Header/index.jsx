import { HeaderBlock, Content, FavoritesBlock, Logo, Favorites, MenuBody, MenuContainer, MenuIcon, MenuList, Buttons, HomeBlock } from './styled.js'
import favorites from '../../assets/bookmark.svg'
import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import { GlobalContainer } from '../../GlobalStyled.js'
import { useState } from 'react'

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const favoritesNavigate = () => {
        navigate('/favorites')
    }

    const mainNavigate = () => {
        navigate('/')
    }

    return (
        <HeaderBlock>
            <GlobalContainer>
                <Content>
                    <Logo><img src={logo} alt="logo" /></Logo>
                    <Buttons>
                        {location.pathname !== '/' && <HomeBlock onClick={mainNavigate}><img src={home} alt="home" /><span>Home</span></HomeBlock>}
                        <FavoritesBlock onClick={favoritesNavigate}><Favorites src={favorites} alt="favorites" /><span>Your favorites</span></FavoritesBlock>
                        <MenuIcon onClick={toggleMenu}>
                            <span></span>
                        </MenuIcon>
                    </Buttons>
                </Content>
                <MenuContainer>
                    <MenuBody isOpen={isOpen}>
                        <MenuList>
                            {location.pathname !== '/' && <div onClick={mainNavigate}><span>Home</span></div>}
                            <div onClick={favoritesNavigate}><span>Your favorites</span></div>
                        </MenuList>
                    </MenuBody>
                </MenuContainer>
            </GlobalContainer>
        </HeaderBlock>
    )
}

export default Header