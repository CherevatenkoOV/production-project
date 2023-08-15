import React, {useState} from "react";
import {render} from "react-dom"
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeContext} from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeProvider";




render(
    <div>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)