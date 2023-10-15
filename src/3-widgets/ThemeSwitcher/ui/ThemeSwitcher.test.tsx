import {ThemeSwitcher} from "3-widgets/ThemeSwitcher";
import {render, screen} from "@testing-library/react";

describe('ThemeSwitcher', () => {

    test('ThemeSwitcher rendering', () => {
        render(<ThemeSwitcher/>)
        const themeSwitcher = screen.getByTestId('theme-switcher')
        expect(themeSwitcher).toBeInTheDocument()
    })
})
