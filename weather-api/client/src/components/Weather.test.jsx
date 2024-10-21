import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Weather from './WEATHER';

// mock setFavorite City function
const mockSetFavoriteCity = jest.fn();

describe('Weather Component', () => {

    // test 1
    test('renders weather input and button on webpage', () => {
        render(<Weather userId={1} setFavoriteCity={mockSetFavoriteCity} />);
    
    // check if the form input is present
    const inputElement = screen.getByPlaceholderText(/Enter City Name/i);
    expect(inputElement).toBeInTheDocument();

    // checks if the button is present
    const buttonElement = screen.getByText(/Get Weather/i);
    expect(buttonElement).toBeInTheDocument();
    });

    // test 2
    test('updates city input', () => {
        render(<Weather userId={1} setFavoriteCity={mockSetFavoriteCity} />);
        
        const inputElement = screen.getByPlaceholderText(/Enter City Name/i);
        fireEvent.change(inputElement, { target: { value: 'London' } });
        
        expect(inputElement.value).toBe('London');
      });
})