import React from 'react';

import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile,faFolder,faPen,faTrash,faCloud } from '@fortawesome/free-solid-svg-icons'

import ItemBox from './components/ItemBox';

library.add(faFile,faFolder,faPen,faTrash,faCloud);
function hide(){
  alert('tst');
}

function App() {
  return (
    <div className="App">
      <aside>
        <li onClick={()=>{hide()}}><FontAwesomeIcon icon="file" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="folder" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="pen" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="trash" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="cloud" className="icon" size="2x"/></li>
      </aside>
      <section>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
      </section>
    </div>
  );
}

export default App;
