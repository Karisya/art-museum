import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Item from "../../components/Item"
import Search from "../../components/Search"
import { setArtworkData } from "../../store/actions-creators/actworkDataActions"
import { setIsLoading } from "../../store/actions-creators/isLoadingActions"

const SearchPage = () => {

    const dispatch = useDispatch()

    const search = useSelector(state => state.search.search)
    const works = useSelector(state => state.works.works);
    const artworkData = useSelector(state => state.data.data)
    const isLoading = useSelector(state => state.isLoading.isLoading)

    useEffect(() => {
        const fetchWorkInfo = async () => {
            try {
                const newData = [];
                for (let i = 0; i < works.length; i++) {
                    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${works[i].id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    newData.push(data.data);
                }
                dispatch(setArtworkData(newData));
                dispatch(setIsLoading(false));
            } catch (error) {
                console.error('Error fetching work info:', error);
            }
        };

        if (works.length > 0) {
            fetchWorkInfo();
        }
    }, [works]);

    return (
        <>
            <Search />
            {search &&
                (<div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        artworkData.map((itemData, index) => (
                            <Item key={index} item={itemData} />
                        ))
                    )}
                </div>)
            }


        </>
    );
};

export default SearchPage;