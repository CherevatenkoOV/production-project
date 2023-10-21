import {Sidebar} from "3-widgets/Sidebar";
import {fireEvent, screen} from "@testing-library/react";
import {componentRender} from "6-shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('Sidebar rendering', () => {
        componentRender(<Sidebar/>)
        const sidebar = screen.getByTestId("sidebar")
        expect(sidebar).toBeInTheDocument()
    })

    test('Sidebar collapsing', () => {
        componentRender(<Sidebar/>)
        const toggleButton = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleButton)
        const sidebar = screen.getByTestId("sidebar");
        expect(sidebar).toHaveClass("collapsed");
    })
})