import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const filterOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortOptions = ['relevance', 'newest'];

  test('Render dropdown with 7 elements', () => {
    render(<Dropdown options={filterOptions} defaultAction={() => 1} action={() => 2} />);

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('Render dropdown with 2 elements', () => {
    render(<Dropdown options={sortOptions} defaultAction={() => 1} action={() => 2} />);

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('Open-close dropdown', () => {
    render(<Dropdown options={filterOptions} defaultAction={() => 1} action={() => 2} />);

    const dropdown = screen.getByTestId('dropdown');
    fireEvent.click(dropdown);
    expect(screen.getAllByTestId('dropdown-item').length).toBe(7);

    fireEvent.click(screen.getAllByTestId('dropdown-item')[3]);
    expect(screen.queryAllByTestId('dropdown-item').length).toBe(0);
    expect(dropdown.classList.contains('active')).toBe(true);
    expect(dropdown.textContent).toEqual(filterOptions[3]);
  });

  test('Open-close dropdown', () => {
    render(<Dropdown options={sortOptions} defaultAction={() => 1} action={() => 2} />);

    const dropdown = screen.getByTestId('dropdown');
    fireEvent.click(dropdown);
    expect(screen.getAllByTestId('dropdown-item').length).toBe(2);

    fireEvent.click(screen.getAllByTestId('dropdown-item')[1]);
    expect(screen.queryAllByTestId('dropdown-item').length).toBe(0);
    expect(dropdown.textContent).toEqual(sortOptions[1]);
  });
});
