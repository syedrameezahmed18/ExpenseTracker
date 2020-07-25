import React, { Component } from 'react';
import { createRef } from 'react';

class Entry extends Component {
    constructor(){
        super()
        this.myRef = createRef();
        this.state={
            amount:0,
            currentamount:0,
            posi:0,
            negi:0
        }
    }
    examiner = () => {
        console.log("buttonwork?")
        let inval=this.myRef.current;
        console.log(`inval ${inval.value}`)
        if(inval.value === "")
        alert("empty input");
        else{
            this.setState({amount:this.state.amount+parseInt(inval.value)});
            this.props.valeval(parseInt(inval.value))
            /*if(this.state.currentamount>0)
            {
                this.setState({posi:this.state.posi+this.state.currentamount})
            }
            else{
                this.setState({negi:this.state.negi+this.state.currentamount})
            }*/
        }
    }
    
   render(){
       let {amount}=this.state;
       
    return(
        <div className="mainentry">
            <div className="topentry">
                {console.log("working?")}
                <input ref={this.myRef} type="number" placeholder="expense or income" className="form-control" />
                <button className="btn btn-outline-primary" onClick={this.examiner} >Add</button>
            </div>
            <div className="balanced">
                {console.log(`return ${amount}`)}
                <p className={this.state.amount > 0 ? "green" : "red"}>Balance ${amount}</p>
                
            </div>
        </div>
    )}
}
export default Entry;