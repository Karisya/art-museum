import './App.css';
import Header from './components/Header';
import { GlobalStyles } from './GlobalStyled';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './constants/routes/mainRoute';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter >
        <Header />
        <MainRoute />
        <Footer />
      </BrowserRouter >
    </GlobalStyles>
  );
}

export default App;
