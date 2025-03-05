import React, {useEffect} from 'react'
import './App.css'
import MainPage from './components/mainPage/mainPage'
import Footer from "./components/mainPage/footer/footer.jsx";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import DetailPage from "./components/detailPage/detailPage.jsx";
import ScrollToTop from "./components/general/scrollToTop.jsx";

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="app">
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/gel-candles" element={<DetailPage title={'Гелевые свечи'}/>} />
                        <Route path="/soy-candles" element={<DetailPage title={'Соевые свечи'}/>} />
                        <Route path="/wax-melts" element={<DetailPage title={'Мэлты'}/>} />
                        <Route path="/accessories" element={<DetailPage title={'Акссессуары'}/>} />
                        <Route path="/dessert-candles" element={<DetailPage title={'Десертные свечи'}/>} />
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App
