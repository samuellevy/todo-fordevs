import React from 'react';
import './index.scss';

function formatDate(date){
  if(date){
    var realDate = JSON.parse('"'+date+'"');
    var finaldate = new Date(realDate);
    console.log(finaldate.toUTCString().substr(0,17));
    return finaldate.toUTCString().substr(0,17);
  }else{
    return "";
  }  
}

function ItemBox(props) {
  return (
    <article>
        <div className='header'>
            <h1>{props.data.name}</h1>
            {
              props.data.labels.map((item,i)=>
                <span className='tag' key={i}>{item.name}</span>
              )
            }
        </div>
        <div className="content">
            <p>{props.data.name}</p>
        </div>
        <div className="footer">
            <div>{formatDate(props.data.dateLastActivity)}</div>
            <div>{formatDate(props.data.due)}</div>
        </div>
    </article>
  );
}

export default ItemBox;
