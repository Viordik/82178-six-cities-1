import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './PlaceCard.jsx';

it(`Component with cards`, () => {
  const card = renderer
        .create(<PlaceCard/>).toJSON();

  expect(card).toMatchSnapshot();
});
