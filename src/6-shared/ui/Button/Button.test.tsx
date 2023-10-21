import {Button, ButtonVariant} from "./Button";
import {render, screen} from '@testing-library/react';

describe('BUTTON', () => {
    test('button rendering', () => {
        render(<Button>TEST</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    test('button has class .Button', () => {
        render(<Button>TEST</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass("Button")
    })

    test('button has class .clear', () => {
        render(<Button variant={ButtonVariant.CLEAR}>TEST</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass("clear")
    })
})