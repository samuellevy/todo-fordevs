import React from 'react';
import ReactDOM from 'react-dom';
import ItemBox from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemBox />, div);
    ReactDOM.unmountComponentAtNode(div);
});