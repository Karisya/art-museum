import { Button, Holder, Pagination, Sort, Prev, StyledButton } from "./styled"
import ErrorBoundary from "../../constants/routes/ErrorBoundary";
import Item from "../Item";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import sort from '../../assets/sort.svg'
import arrow from '../../assets/arrow.svg'
import { setCurrentPage } from "../../store/actions-creators/currentPageActions";
import { setAllWorks } from "../../store/actions-creators/allWorksActions";
import { setWindowWidth } from "../../store/actions-creators/windowWidthActions";
import { setItemsPerPage } from "../../store/actions-creators/itemsPerPageActions";
import { setPagination } from "../../store/actions-creators/paginationActions";

const AllResults = () => {

    const dispatch = useDispatch()
    const allWorks = useSelector(state => state.all.all)
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
        const sortedWorks = allWorks.sort((a, b) => a.title.localeCompare(b.title));
        dispatch(setAllWorks(sortedWorks));
    }, [allWorks]);

    // Логика пагинации
    useEffect(() => {
        dispatch(setPagination(allWorks.length > itemsPerPage))
    }, [allWorks, itemsPerPage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentAllworkData = useMemo(() => allWorks.slice(indexOfFirstItem, indexOfLastItem))


    const sortTitle = () => {
        const sortedWorks = [...allWorks].sort((a, b) => a.title.localeCompare(b.title));
        dispatch(setCurrentPage(1))
        dispatch(setAllWorks(sortedWorks))
        dispatch(setPagination(allWorks.length > itemsPerPage));
    }



    const handleNextPage = () => {
        dispatch(setCurrentPage(prevPage => prevPage + 1));
    };

    const handlePrevPage = () => {
        dispatch(setCurrentPage(prevPage => prevPage - 1));
    };

    return (
        <>
            <ErrorBoundary>
                <Sort onClick={sortTitle}><img src={sort} alt='sort' /></Sort>
                <Holder>
                    {currentAllworkData.map((itemData, index) => (
                        <Item key={index} item={itemData} />
                    ))}
                </Holder>
                {pagination ? (
                    <Pagination>
                        {currentPage > 1 && (
                            <div>
                                <Button active={currentPage > 1} onClick={handlePrevPage}>
                                    <Prev src={arrow} alt='prev' />
                                </Button>
                            </div>
                        )}
                        {Array.from({ length: Math.min(Math.ceil(allWorks.length / itemsPerPage), 4) }).map((_, index) => (
                            <div key={index}>
                                <StyledButton
                                    active={index + 1 === currentPage}
                                    onClick={() => dispatch(setCurrentPage(index + 1))}
                                >
                                    {index + 1}
                                </StyledButton>
                            </div>
                        ))}
                        {Math.ceil(allWorks.length / itemsPerPage) > 4 && (
                            <div>
                                <Button active={Math.ceil(allWorks.length / itemsPerPage) > 4} onClick={handleNextPage}>
                                    <img src={arrow} alt='next' />
                                </Button>
                            </div>
                        )}
                    </Pagination>
                ) : (<Holder>{currentAllworkData.map((itemData, index) => (
                    <Item key={index} item={itemData} />
                ))}</Holder>)}
            </ErrorBoundary>
        </>)
}

export default AllResults