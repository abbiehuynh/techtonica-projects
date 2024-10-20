import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './Form';

// creates testing suite
describe('MyForm', () => {
    // creates mock of OnSaveContact
    const mockOnSaveContact = jest.fn();

    // this will run before each test in the suite - renders onSaveContact in Form Component
    beforeEach(() => {
        render(<MyForm onSaveContact={mockOnSaveContact} />);
    });

    test('renders form fields', () => {
        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    })

})