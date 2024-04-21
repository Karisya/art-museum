import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, SearchForm, Title, Span, SearchContent } from './styled'
import search from '../../assets/search.svg';
import { setWorks } from '../../store/actions-creators/workActions';
import { useDispatch } from 'react-redux';
import { setTerm } from '../../store/actions-creators/termActions';
import { setSearch } from '../../store/actions-creators/searchActions';
import { setIsLoading } from '../../store/actions-creators/isLoadingActions';

const Search = () => {
    const dispatch = useDispatch();
    const initialValues = {
        searchQuery: '',
    };

    const validationSchema = Yup.object().shape({
        searchQuery: Yup.string().required('Search query is required'),
    });

    const debounce = (callback, delay) => {
        let timeoutId;
        return (value) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                callback(value);
            }, delay);
        };
    };

    const handleChange = debounce((value) => {
        dispatch(setTerm(value));
    }, 750);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            dispatch(setIsLoading(true));
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${values.searchQuery}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            dispatch(setWorks(data.data));
            dispatch(setSearch(true));
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SearchContent>
            <Title>
                Let's find some <Span>art</Span> here!
            </Title>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <SearchForm>
                            <Field
                                type="text"
                                name="searchQuery"
                                placeholder="Search art, artist, work..."
                                as={Input}
                                onBlur={(e) => handleChange(e.currentTarget.value)}
                            />
                            <ErrorMessage name="searchQuery" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Searching...' : <img src={search} alt="search" />}
                            </button>
                        </SearchForm>
                    </Form>
                )}
            </Formik>
        </SearchContent>
    );
};

export default Search;
