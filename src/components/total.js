import React, { Component } from 'react';

var Total = ({neg,pos}) => {
    
        return ( <div className="tabled">
                    {console.log(`childest ${neg} ${pos}`)}
                    <p className="f">Income : {pos}</p>
                    <p className="s">Expense : {Math.abs(neg)}</p>
                </div> );
    
}
 
export default Total;