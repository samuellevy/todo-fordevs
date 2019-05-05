import React from 'react';
import ReactDOM from 'react-dom';
import ItemBox from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemBox />, div);
    ReactDOM.unmountComponentAtNode(div);
});


describe('Examining the syntax of Jest tests', () => {
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
    });
});