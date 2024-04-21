import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContainer } from "../../GlobalStyled";
import { Artist, Card, Data, Div, Info, Title, Holder, Footer, Header, Overview, ImageBlock, Image, Loading } from "./styled";
import ErrorBoundary from "../../constants/routes/ErrorBoundary";

const ItemData = () => {

    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArtwork(data.data);
            } catch (error) {
                console.error('Error fetching artwork details:', error);
            }
        };
        fetchArtwork();
    }, [id]);

    if (!artwork) {
        return <Loading>Loading...</Loading>;
    }

    return (
        <ErrorBoundary>
            <GlobalContainer>
                <Card>
                    <Div>

                        <ImageBlock><Image src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt="" /></ImageBlock>
                        <Holder>
                            <Header>
                                <Title>{artwork.title}</Title>
                                <Artist>{artwork.artist_title}</Artist>
                                <Data>{artwork.date_display}</Data>
                            </Header>
                            <Footer>
                                <Overview>Overview</Overview>
                                <p><Info>Artist nacionality:</Info> {artwork.place_of_origin}</p>
                                <p><Info>Dimensions: Sheet:</Info> {artwork.dimensions}</p>
                                <p><Info>Credit Line:</Info> {artwork.credit_line}</p>
                            </Footer>
                        </Holder>

                    </Div>

                </Card>
            </GlobalContainer >
        </ErrorBoundary>)
}

export default ItemData