import { useEffect} from "react"
import { Block, Card, Image, ImageBlock, Button, ContentHolder, Info, TitleItem, Artist, FavoritIcon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setAllWorks } from "../../store/actions-creators/allWorksActions";
import favorites from '../../assets/favorites.svg'
import { Content, Note, Title } from "../Artworks/styled";
import { Link } from "react-router-dom";
import { setIsFavorites } from "../../store/actions-creators/isFavoritesActions";
import ErrorBoundary from "../../constants/routes/ErrorBoundary";
import { setFavorites } from "../../store/actions-creators/favoritesActions";

const AllWorks = () => {

    const dispatch = useDispatch()
    const allWorks = useSelector(state => state.all.all)

    useEffect(() => {
        const fetchWorkInfo = async () => {
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks?fields=id,title,thumbnail,artist_title,image_id,?page=3&limit=9`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch(setAllWorks(data.data))
                console.log('data', data.data)
            }
            catch (error) {
                console.error('Error fetching work info:', error);
            }
        };
        fetchWorkInfo()
    }, []);

    const handleAddToFavorites = (id) => {
        const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favoritesList.includes(id)) {
            favoritesList.push(id);
            localStorage.setItem('favorites', JSON.stringify(favoritesList));
            dispatch(setIsFavorites(true));
            dispatch(setFavorites(favoritesList))
        }
    };

    return (
        <ErrorBoundary>
            <Content>
                <Note>Here some more</Note>
                <Title>Other works for you</Title>
                <Block>
                    {allWorks.map(i => {
                        return (
                            <Card key={i.id}>
                                <Link to={`/data/${i.id}`} >
                                    <ContentHolder>

                                        <ImageBlock>
                                            <img src={`https://www.artic.edu/iiif/2/${i.image_id}/full/843,/0/default.jpg`} alt="work" width={300} />
                                        </ImageBlock>
                                        <Info>
                                            <TitleItem>{i.title}</TitleItem>
                                            <Artist>{i.artist_title}</Artist>
                                        </Info>
                                    </ContentHolder>
                                </Link>
                                <Button onClick={() => handleAddToFavorites(i.id)}>
                                    <FavoritIcon src={favorites} alt="favorit" />
                                </Button>
                            </Card>
                        )
                    })}
                </Block>
            </Content>
        </ErrorBoundary>
    )


}

export default AllWorks