import { Routes, Route } from "react-router-dom";
import Home from '../screens/HomePage/Home';
import Expenses from '../screens/Expenses/Expenses';

const MainRouter = () => (

    <Routes>
        <Route index element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
    </Routes>

);

export default MainRouter;