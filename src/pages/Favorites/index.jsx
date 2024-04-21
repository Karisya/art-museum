import { Card, Button, ImageBlock, Image, Block } from "../../components/allWorks/styled";
import { useEffect } from "react";
import favorites from '../../assets/favorites.svg'
import ErrorBoundary from "../../constants/routes/ErrorBoundary";
import icon from '../../assets/icon.svg'
import { Title, Span, Header, Note, Content } from "./styled";
import { GlobalContainer } from "../../GlobalStyled";
import { deleteFavorites } from "../../store/actions-creators/favoritesActions";
import { setFavorites } from "../../store/actions-creators/favoritesActions";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {

    const dispatch = useDispatch()
    const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    const favorit = useSelector(state => state.favorites.favorites)

    useEffect(() => {
        const fetchWorkInfo = async () => {
            try {
                const newData = [];
                for (let i = 0; i < favoritesList.length; i++) {
                    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${favoritesList[i]}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    newData.push(data.data);
                }
                dispatch(setFavorites(newData));
            } catch (error) {
                console.error('Error fetching work info:', error);
            }
        };

        if (favoritesList.length > 0) {
            fetchWorkInfo();
        }
    }, [favoritesList]);


    const handledeleteFavorites = (id) => {
        dispatch(deleteFavorites(id));
    }


    return (
        <ErrorBoundary>
            <GlobalContainer>
                <Content>
                    <Title>Here are your <br /><Span><img src={icon} />favorites</Span></Title>
                    <Note>Saved by you</Note>
                    <Header>Your favorites list</Header>
                    <Block>
                        {favorit.map(i => {
                            return (
                                <Card key={i.id}>
                                    <ImageBlock>
                                        <Image src={`https://www.artic.edu/iiif/2/${i.image_id}/full/843,/0/default.jpg`} alt="work" width={300} />
                                    </ImageBlock>
                                    <div>
                                        <div>{i.title}</div>
                                        <div>{i.artist_title}</div>
                                    </div>
                                    <Button onClick={() => handledeleteFavorites(i.id)}>
                                        <img src={favorites} alt="favorit" />
                                    </Button>
                                </Card>
                            )
                        })}
                    </Block>
                </Content>
            </GlobalContainer>
        </ErrorBoundary>)
}

export default Favorites