import {ReactNode} from "react";
import i18nForTests from "6-shared/config/i18next/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

export interface renderWithRouterOptions {
    route?: string;
}

export const componentRender = (component: ReactNode, options: renderWithRouterOptions = {}) => {
    const {route = "/"} = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}