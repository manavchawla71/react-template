import React from 'react';
import './ExpItem.css';

function ExpItem(props) {
    // here props will ensure that it contains all the data imported to this component
    // const month=
    // const year=
    // const date=new Date();
    // const month =props.date.toLocaleString('en-US')
    // above we can write simple javascript
    return (
        <div className="expense-item">
          <div>{1+1}</div>
          <div>{2+2}</div>
          <div>{3+3}</div>
        <div className="expense- item__description">
         <h2>{props.title}</h2>
         <div className="expense-item__price">{props.amount}</div>
        </div>
        </div>
    )
}

export default ExpItem
