import React from 'react';

function ItemBox() {
  return (
    <article>
        <div className='header'>
            <h1>Concluir tarefa do Electron</h1>
            <span className='tag'>electron</span>
            <span className='tag'>php</span>
            <span className='tag'>js</span>
            <span className='tag'>react</span>
        </div>
        <div className="content">
            <p>buscar dados suficientes para enrolar qualquer texto aqui.</p>
        </div>
        <div className="footer">
            <div>13 de abril</div>
            <div>05 de maio</div>
        </div>

    </article>
  );
}

export default ItemBox;
