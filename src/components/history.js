import React, { Component } from 'react';

class History extends Component {
    constructor()
    {
        super()
        this.state={
            entrycount:1
        }
    }
    render() { 
        let {entrycount}= this.state
        let abswitch="";
        let abval=null;
        console.log(`psig : ${this.props.psignal}`)
        if(this.props.psignal != null)
        {
            abswitch="income";
            abval=this.props.psignal;
            console.log(`newabswitch ${abswitch}`)

        }
        else if (this.props.nsignal != null)
        {
            abswitch="expense";
            abval=this.props.nsignal;
        }
        console.log("error");
        
        return ( <div className="history">
                    <div className="headhist">
                        <p className="green">History</p>
                        <div className="renderation">
                            
                                
                                {console.log(`abswitch ${abswitch}`)}
                                <div className="structure">
                                    <p className="type">{abswitch}</p>
                                    <p className="amount">{abval}</p>
                                </div>
                                
                                
                                
                            
                        </div>
                    </div>
                </div> );
    }
}
 
export default History;