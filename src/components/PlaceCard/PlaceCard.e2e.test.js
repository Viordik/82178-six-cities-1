import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './PlaceCard';

Enzyme.configure({adapter: new Adapter()});

it(`lol`, () => {
  const onClickTitle = jest.fn();
  const item = shallow(
      <PlaceCard
        onClickTitle={onClickTitle}
      />
  );

  const link = item.find(`.link-item`);
  link.simulate(`click`);

  expect(onClickTitle).toHaveBeenCalledTimes(1);
});
