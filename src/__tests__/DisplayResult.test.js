import React from 'react';
import DisplayResult from '../components/DisplayResult';
import { getByText, render } from '@testing-library/react';

it('Display result correctly', () => {
    const mockResult = {H: "M", K: 20}
    const { getByText } = render(<DisplayResult Result={mockResult} />)
    expect(getByText(`H: ${mockResult.H}`)).toBeInTheDocument();
    expect(getByText(`K: ${mockResult.K}`)).toBeInTheDocument();
  });