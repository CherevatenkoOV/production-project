import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import useTheme from "./context/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hover: true, selected: false}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        element={<AboutPageAsync/>}
                        path="/about"
                    />
                    <Route
                        element={<MainPageAsync/>}
                        path="/"
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;