import React from 'react';
import {render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar.jsx';

test('renders the text', () => {
    render(<NavigationBar text="Abbie's Animal Sighting Tracker" />);
    
    const element = screen.getByText(/Abbie's Animal Sighting Tracker/i);
    expect(element).toBeInTheDocument();
});

