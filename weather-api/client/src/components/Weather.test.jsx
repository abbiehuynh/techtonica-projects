import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Weather from './WEATHER';

// mock setFavorite City function
const mockSetFavoriteCity = jest.fn();

describe('Weather Component', () => {
    
    test('renders weather forecast on webpage', () => {
        render(<Weather userId={1} setFavoriteCity={mockSetFavoriteCity} />);
    
    // check if the form input is present
    const inputElement = screen.getByPlaceholderText(/Enter City Name/i);
    expect(inputElement).toBeInTheDocument();
    })
})