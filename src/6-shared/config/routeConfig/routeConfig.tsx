import React from "react";
import {RouteProps} from "react-router-dom";
import {AboutPage} from "2-pages/AboutPage";
import {MainPage} from "2-pages/MainPage";

export enum AppRoutes {
    ABOUT = 'about',
    MAIN = 'main'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    }
}







