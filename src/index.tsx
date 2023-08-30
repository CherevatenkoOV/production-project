import React, {Suspense, useState} from "react";
import {render} from "react-dom"
import App from "./1-app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "1-app/providers/ThemeProvider";
import '6-shared/config/i18next/i18n';
// import './i18n';


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