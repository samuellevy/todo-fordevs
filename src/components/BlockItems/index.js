import React, { Component } from 'react';
import axios from 'axios';
import ItemBox from '../ItemBox';
import SwipeToDelete from 'react-swipe-to-delete-component';

class BlockItems extends Component{
    // default State object
    state = {
        contacts: []
    };
    
    componentDidMount() {
        // axios
        // .get("https://jsonplaceholder.typicode.com/users")
        // .then(response => {
        
        //     // create an array of contacts only with relevant data
        //     const newContacts = response.data.map(c => {
        //         return {
        //             id: c.id,
        //             name: c.name
        //         };
        //     });
        
        //     // create a new "State" object without mutating 
        //     // the original State object. 
        //     const newState = Object.assign({}, this.state, {
        //         contacts: newContacts
        //     });
        
        //     // store the new state object in the component's state
        //     this.setState(newState);
        //     console.log(newState);
        // })
        // .catch(error => console.log(error));
        
        axios.get("https://api.trello.com/1/lists/5cd5055dbb1d553d3a06ce5e/cards?key=eee14dd0267da5c5f2ed461e5fa0b28c&token=895dad5ac5c3c6ab6d6b8f7c21c66c741a7dd57dd27e6fb170d8f8306ecad645")
        .then(res=>{
            this.setState({contacts: res.data});
        });
    }
    render(){
        return(
            <div>
            {
                this.state.contacts.map((item,i) =>
                <SwipeToDelete key={i} background={false}>
                <ItemBox data={item} />
                </SwipeToDelete>
                )
            }
            </div>
            );
        }
    }
    
    export default BlockItems;