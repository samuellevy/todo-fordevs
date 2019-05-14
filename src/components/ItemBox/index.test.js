import React from 'react';
import ReactDOM from 'react-dom';
import ItemBox from './';


describe("when render a itembox", ()=>{
    let data = [];
    data.labels = [];
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItemBox data={data} key={1}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});