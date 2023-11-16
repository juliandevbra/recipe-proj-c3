import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";

describe('LoginForm testing', () => {
    test('Should render title', () => {
        render(<LoginForm/>)
        const title =  screen.getByText(/loguear a recetas dh/i)
        expect(title).toBeDefined()
    })
    test('Should render first input', () => {
        render(<LoginForm/>)
        const email = screen.getByRole('Email')
        expect(email).toBeDefined()
    })
    test('Second input should change', () => {
        render(<LoginForm/>)
        const password = screen.getByTestId('Password')
        fireEvent.change(password, {target: {value: '123'}}) //event.target.value
        expect(password.value).toBe('123')
    })
    test('Should call button function', () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Acceder')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})