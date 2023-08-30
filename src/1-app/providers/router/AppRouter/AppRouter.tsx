import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "6-shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <div className="page-wrapper">
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (

                    <Route
                        path={path}
                        element={element}
                        key={path}
                    />
                ))
                }
            </Routes>
        </Suspense>
        </div>
    )
        ;
};

export default AppRouter;