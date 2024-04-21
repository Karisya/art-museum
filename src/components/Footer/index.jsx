import { GlobalContainer } from "../../GlobalStyled"
import { Content, Logo, Block } from "./styled"
import logo from '../../assets/logo2.svg'
import modsen from '../../assets/modsen.svg'

const Footer = () => {

    return (
        <div>
            <GlobalContainer>
                <Content>
                    <Logo><img src={logo} alt="logo" /></Logo>
                    <Block><img src={modsen} alt="modsen" /></Block>
                </Content>
            </GlobalContainer>
        </div>
    )
}

export default Footer