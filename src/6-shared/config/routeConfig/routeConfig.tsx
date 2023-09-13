import React from "react";
import {RouteProps} from "react-router-dom";
import {AboutPage} from "2-pages/AboutPage";
import {MainPage} from "2-pages/MainPage";
import {NotFoundPage} from "2-pages/NotFoundPage";

export enum AppRoutes {
    ABOUT = 'about',
    MAIN = 'main',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    }
}







