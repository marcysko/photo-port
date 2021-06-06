import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        
        expect(asFragment()).toMatchSnapshot();
    
    });
})
  
 
