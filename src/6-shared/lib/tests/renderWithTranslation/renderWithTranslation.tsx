import {ReactNode} from "react";
import i18nForTests from "6-shared/config/i18next/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {render} from "@testing-library/react";

export const renderWithTranslation = (component: ReactNode) => {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>
    )
}