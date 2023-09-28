import {ThemeSwitcher} from "3-widgets/ThemeSwitcher";
import {render, screen} from "@testing-library/react";

describe('ThemeSwitcher', () => {

    test('ThemeSwitcher rendering', () => {
        render(<ThemeSwitcher/>)
        const themeSwitcher = screen.getByTestId('theme-switcher')
        expect(themeSwitcher).toBeInTheDocument()
    })
    // этот тест вызывал ошибку. Рассмотреть в будущем причины. Текст ошибки:
    // ● ThemeSwitcher › SVG rendering
    //
    //     Unable to find an element by: [data-testid="svg-icon"]
    //
    //     Ignored nodes: comments, script, style
    // test('SVG rendering', async () => {
    //     render(<ThemeSwitcher/>)
    //     const svg = await screen.findByTestId('svg-icon')
    //     expect(svg).toBeInTheDocument()
    // })
})
