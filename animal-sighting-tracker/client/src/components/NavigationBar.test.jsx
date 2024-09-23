import React from 'react';
import {render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar.jsx';
import ListingSpecies from './ListSightings.jsx';
import { MemoryRouter } from 'react-router-dom';

// test one
test('renders the text', () => {
    render(<NavigationBar text="Abbie's Animal Sighting Tracker" />);
    
    // checks if the text is in the document
    const element = screen.getByText(/Abbie's Animal Sighting Tracker/i);
    expect(element).toBeInTheDocument();
});

// test two 
test('renders navigation links', () => {
    render(<NavigationBar />);

    // checks if the links are in the document
    const speciesLink = screen.getByText(/Species Tracking/i);
    const sightingsLink = screen.getByText(/sightings tracker/i);

    expect(speciesLink).toBeInTheDocument();
    expect(sightingsLink).toBeInTheDocument();

    // check if the links have the correct href
    expect(speciesLink.closest('a')).toHaveAttribute('href', '/species');
    expect(sightingsLink.closest('a')).toHaveAttribute('href', '/species/sightings');
});

