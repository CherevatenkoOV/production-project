import React, {Suspense, useState} from 'react';
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "6-shared/lib/classNames/classNames";
import {AppRouter} from "1-app/providers/router";
import Navbar from "3-widgets/Navbar/ui/Navbar";
import {Sidebar} from "3-widgets/Sidebar";


const App = () => {
    const {theme} = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    return (

        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<h1>Loading the page...</h1>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>

    );
};

export default App;