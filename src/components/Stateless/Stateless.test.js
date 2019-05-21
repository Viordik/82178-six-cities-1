import React from 'react';
import renderer from 'react-test-renderer';
import Stateless from './Stateless.jsx';

it(`Home page`, () => {
  const tree = renderer
        .create(<Stateless/>).toJSON();

  expect(tree).toMatchSnapshot();
});
