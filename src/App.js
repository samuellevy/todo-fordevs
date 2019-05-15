import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile,faFolder,faPen,faTrash,faCloud } from '@fortawesome/free-solid-svg-icons'

import BlockItems from './components/BlockItems';

library.add(faFile,faFolder,faPen,faTrash,faCloud);

function ComponentDidMount() {
  useEffect(() => {
    
  }, []);
  return null;
}

function App() {
  ComponentDidMount();
  return (
    <div className="App">
      <aside>
        <li><FontAwesomeIcon icon="file" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="folder" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="pen" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="trash" className="icon" size="2x"/></li>
        <li><FontAwesomeIcon icon="cloud" className="icon" size="2x"/></li>
      </aside>
      <section>
        <BlockItems/>
      </section>
    </div>
  );
}

export default App;
