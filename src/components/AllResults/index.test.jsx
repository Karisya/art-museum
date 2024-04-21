import { render, fireEvent } from '@testing-library/react';
import AllResults from './AllResults';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

describe('AllResults component', () => {
    it('renders sort button', () => {
        const { getByAltText } = render(<AllResults />);
        const sortButton = getByAltText('sort');
        expect(sortButton).toBeInTheDocument();
    });

    it('renders items correctly', () => {
        useSelector.mockReturnValue([
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' }
        ]); // allWorks
        useSelector.mockReturnValueOnce(1); // currentPage
        useSelector.mockReturnValueOnce(800); // windowWidth
        useSelector.mockReturnValueOnce(3); // itemsPerPage

        const { getByText } = render(<AllResults />);

        expect(getByText('Item 1')).toBeInTheDocument();
        expect(getByText('Item 2')).toBeInTheDocument();
        expect(getByText('Item 3')).toBeInTheDocument();
    });

    it('handles sort click', () => {
        const mockDispatch = jest.fn();

        useDispatch.mockReturnValue(mockDispatch);

        const { getByAltText } = render(<AllResults />);

        fireEvent.click(getByAltText('sort'));

        expect(mockDispatch).toHaveBeenCalledWith('setCurrentPage');
    });

});
