import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Stateless from './components/Stateless/Stateless';

// Mocks
import offers from './mocks/offers';


const state = {
  offers
};

ReactDOM.render(
    <Stateless state={state} />,
    document.getElementById(`root`)
);
