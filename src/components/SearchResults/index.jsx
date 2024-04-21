import { Button, Holder, Pagination, Sort, Prev, StyledButton } from "./styled"
import sort from '../../assets/sort.svg'
import { useState, useMemo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Item from "../Item"
import ErrorBoundary from "../../constants/routes/ErrorBoundary"
import arrow from '../../assets/arrow.svg'
import { setArtworkData } from "../../store/actions-creators/actworkDataActions"
import { setItemsPerPage } from "../../store/actions-creators/itemsPerPageActions"
import { setCurrentPage } from "../../store/actions-creators/currentPageActions"
import { setWindowWidth } from "../../store/actions-creators/windowWidthActions"
import { setPagination } from "../../store/actions-creators/paginationActions"

const SearchResults = () => {
    const dispatch = useDispatch()
    const artworkData = useSelector(state => state.data.data)
    const currentPage = useSelector(state => state.page.page)
    const windowWidth = useSelector(state => state.width.width)
    const itemsPerPage = useSelector(state => state.perPage.perPage)
    const pagination = useSelector(state => state.pagination.pagination)

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 764) {
            dispatch(setItemsPerPage(1));
        }

        else {
            dispatch(setItemsPerPage(3));
        }
    }, [windowWidth]);

    // Логика сортировки
    useEffect(() => {
        const sortedWorks = artworkData.sort((a, b) => a.title.localeCompare(b.title));
        dispatch(setArtworkData(sortedWorks));
    }, [artworkData]);

    // Логика пагинации
    useEffect(() => {
        dispatch(setPagination(artworkData.length > itemsPerPage));
    }, [artworkData, itemsPerPage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentArtworkData = useMemo(() => artworkData.slice(indexOfFirstItem, indexOfLastItem))


    const sortTitle = () => {
        const sortedWorks = [...artworkData].sort((a, b) => a.title.localeCompare(b.title));
        dispatch(setCurrentPage(1))
        dispatch(setArtworkData(sortedWorks))
        dispatch(setPagination(artworkData.length > itemsPerPage));
    }


    const handleNextPage = () => {
        dispatch(setCurrentPage(prevPage => prevPage + 1));
    };

    const handlePrevPage = () => {
        dispatch(setCurrentPage(prevPage => prevPage - 1));
    };
    return (
        <ErrorBoundary>
            <Sort onClick={sortTitle}><img src={sort} alt='sort' /></Sort>
            <Holder>
                {currentArtworkData.map((itemData, index) => (
                    <Item key={index} item={itemData} />
                ))}
            </Holder>
            {pagination && (
                <Pagination>
                    {currentPage > 1 && (
                        <div>
                            <Button onClick={handlePrevPage}>
                                <Prev src={arrow} alt='prev' />
                            </Button>
                        </div>
                    )}
                    {Array.from({ length: Math.min(Math.ceil(artworkData.length / itemsPerPage), 4) }).map((_, index) => (
                        <div key={index}>
                            <StyledButton
                                active={index + 1 === currentPage}
                                onClick={() => dispatch(setCurrentPage(index + 1))}
                            >
                                {index + 1}
                            </StyledButton>
                        </div>
                    ))}
                    {Math.ceil(artworkData.length / itemsPerPage) > 4 && (
                        <div>
                            <Button onClick={handleNextPage}>
                                <img src={arrow} alt='next' />
                            </Button>
                        </div>
                    )}
                </Pagination>
            )}
        </ErrorBoundary>
    );
};

export default SearchResults;
