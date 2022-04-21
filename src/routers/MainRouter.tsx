import { Routes, Route } from "react-router-dom";
import Home from '../screens/HomePage/Home';
import Expenses from '../screens/Expenses/Expenses';

// components
import Layout from '../components/Layout/Layout'

const MainRouter = () => (

    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="expenses" element={<Expenses />} />
        </Route>
    </Routes>

);

export default MainRouter;