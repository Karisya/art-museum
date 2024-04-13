import { Input, Button, SearchForm, Title, Span, SearchBlock } from './styled'
import search from '../../assets/search.svg'
import { setWorks } from '../../store/actions-creators/workActions'
import { useSelector, useDispatch } from 'react-redux'
import { setTerm } from '../../store/actions-creators/termActions'
import { setSearch } from '../../store/actions-creators/searchActions'

const Search = () => {

    const dispatch = useDispatch()

    const term = useSelector(state => state.term.term)
    const works = useSelector(state => state.works.works)

    const handleChange = (e) => {
        dispatch(setTerm(e.target.value))
    }

    const handleSubmit = async (term) => {

        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${term}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            dispatch(setWorks(data.data));
            dispatch(setSearch(true))
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    const handleClick = (e) => {

        e.preventDefault()
        handleSubmit(term)
        dispatch(setSearch(true))
    }

    return (
        <SearchBlock>
            <Title>let's find some <Span>art</Span> here!</Title>
            <form>
                <SearchForm>
                    <Input placeholder="Search art, artist, work..." value={term} onChange={(e) => handleChange(e)} />
                    <Button><img src={search} alt="search" onClick={(e) => handleClick(e)} /></Button>
                </SearchForm>
            </form>
        </SearchBlock>
    )

}

export default Search