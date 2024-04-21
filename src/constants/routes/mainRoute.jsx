import { Routes, Route, Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import Favorites from '../../pages/Favorites';
import MainPage from '../../pages/mainPage';
import ItemData from '../../pages/ItemData';

const MainRoute = () => {

    return (

        <>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path="/data/:id" element={<ItemData />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default MainRoute;
