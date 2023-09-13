import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "6-shared/config/routeConfig/routeConfig";
import PageLoader from "3-widgets/PageLoader/ui/PageLoader";

const AppRouter = () => {
    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader/>}>
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