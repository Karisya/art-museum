import { GlobalContainer } from "../../GlobalStyled"
import AllWorks from "../../components/allWorks"
import Artworks from "../../components/Artworks"
import Search from "../../components/Search"
import ErrorBoundary from "../../constants/routes/ErrorBoundary"

const MainPage = () => {

    return (
        
        <GlobalContainer>
            <Search/>
            <Artworks />
            <AllWorks />
        </GlobalContainer>
    )

}

export default MainPage