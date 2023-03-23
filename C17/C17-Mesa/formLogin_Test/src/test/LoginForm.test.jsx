import { describe, expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";


describe("LoginForm", () => {
    test('no debe permitir el ingreso de números', () => {
        const { getByLabelText } = render(<LoginForm />);
        const input = getByLabelText('Nombre y Apellido:');
        fireEvent.change(input, { target: { value: '2023' } });
        expect(input.value).toBe('');
    });

    test('debe permitir ingresar texto', () => {
        const { getByLabelText } = render(<LoginForm />);
        const input = getByLabelText('Nombre y Apellido:');
        fireEvent.change(input, { target: { value: 'Juan' } });
        expect(input.value).toBe('Juan');
    });
});