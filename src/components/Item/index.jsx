import { Card, ImageBlock, Image, Info, Artist, Title, Public, Container, ArtistTitle, Favorites, Content } from "./styled";
import favorites from '../../assets/favorites.svg'
import { Link } from "react-router-dom";
import { setIsFavorites } from "../../store/actions-creators/isFavoritesActions";
import { useDispatch } from "react-redux";

const Item = ({ item }) => {

    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favoritesList.includes(item.id)) {
            favoritesList.push(item.id);
            localStorage.setItem('favorites', JSON.stringify(favoritesList));
            dispatch(setIsFavorites(true));
        }
    };

    return (
        <Card>
            <Link>
                <ImageBlock>
                    <Image src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} />
                </ImageBlock>
            </Link>
            <Info>
                <Content>
                    <Link to={`/data/${item.id}`} >
                        <ArtistTitle>{item.title}</ArtistTitle>
                        <Artist>{item.artist_title}</Artist>
                        <Public>найти поле с public</Public>
                    </Link>
                </Content>
                <Favorites onClick={handleAddToFavorites}><img src={favorites} alt="favorit" /></Favorites>
            </Info>

        </Card>
    );


}

export default Item