import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Item from "../../components/Item"
import Search from "../../components/Search"
import { setWorkInfo } from "../../store/actions-creators/workInfoActions"
const SearchPage = () => {
    const dispatch = useDispatch();
    const works = useSelector(state => state.works.works);
    const [arr, setArr] = useState([]);

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
                setArr(newData);
            } catch (error) {
                console.error('Error fetching work info:', error);
            }
        };

        fetchWorkInfo();
    }, [works]);

    return (
        <>
            <Search />
            {arr.map((itemData, index) => (
                <Item key={index} item={itemData} />
            ))}
        </>
    );
}

export default SearchPage;