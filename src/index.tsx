import React, {Suspense} from "react";
import {render} from "react-dom"
import App from "./1-app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "1-app/providers/ThemeProvider";
import '6-shared/config/i18next/i18n';
import {ErrorBoundary} from "1-app/providers/ErrorBoundary";


render(
    <div>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)