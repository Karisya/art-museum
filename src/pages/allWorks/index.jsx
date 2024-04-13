import { useEffect, useState } from "react"
import { Block, Card, Image } from "./styled";

const AllWorks = () => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        const fetchWorkInfo = async () => {
            try {

                const response = await fetch(`https://api.artic.edu/api/v1/artworks?fields=id,title,thumbnail,artist_title,image_id,?page=3&limit=9`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArr(data.data)
                console.log('data', data.data)
            }
            catch (error) {
                console.error('Error fetching work info:', error);
            }
        };
        fetchWorkInfo()
    }, []);

    return (
        <Block>
            {arr.map(i => {
                return (
                    <Card key={i.id}>
                        <div>
                            <Image src={`https://www.artic.edu/iiif/2/${i.image_id}/full/843,/0/default.jpg`} alt="work" width={300} />
                        </div>
                        <div>
                            <div>{i.title}</div>
                            <div>{i.artist_title}</div>
                        </div>
                        <div>
                            <button><img src="" alt="favorit" /></button>
                        </div>
                    </Card>
                )
            })}
        </Block>
    )


}

export default AllWorks