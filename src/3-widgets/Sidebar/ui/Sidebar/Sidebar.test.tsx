import {Sidebar} from "3-widgets/Sidebar";
import {fireEvent, screen} from "@testing-library/react";
import {renderWithTranslation} from "6-shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('Sidebar rendering', () => {
        renderWithTranslation(<Sidebar/>)
        const sidebar = screen.getByTestId("sidebar")
        expect(sidebar).toBeInTheDocument()
    })

    test('Sidebar collapsing', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleButton)
        const sidebar = screen.getByTestId("sidebar");
        expect(sidebar).toHaveClass("collapsed");
    })
})