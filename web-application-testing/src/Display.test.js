import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';


describe('<Display />', () => {

    it('renders without crashing', () => {
        render(<Display />)

    });

    //====This verifies that props are being passed from App.js to Display
    it('should verify props being passed', () => {
        const display = render(<Display strikes = {1} balls = {2}/>);
        display.getByText(/Strikes: 1/);
        display.getByText(/Balls: 2/)

    });

    it('should verify that the componenet dumb', () => {
        const display = render(<Display strikes = {-2} balls = {3000}/>);
        display.getByText(/Strikes: -2/);
        display.getByText(/Balls: 3000/)

    });
    //====Verification complete=========


})