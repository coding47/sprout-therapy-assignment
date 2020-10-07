import React from 'react';
import renderer from 'react-test-renderer';
import HandleExp from '../components/HandleExp';

it('renders correctly', () => {
  const tree = renderer
    .create(<HandleExp />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});