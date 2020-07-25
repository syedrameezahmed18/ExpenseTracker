import React, { Component } from 'react';
import Entry from "./components/entry";
import Total from "./components/total";
import History from "./components/history";

class Main extends Component {
    constructor() {
        super()
        this.state={
            amount:0,
            negation:0,
            position:0,
            vall:0,
            staticn:null,
            staticp:null,
            counts:0,

        }
    }

    decide = (v) => {
        
        if ( v >= 0 ) {

            this.setState({position:this.state.position+v})
            this.setState({staticp:v})
            this.setState({staticn:null})
   }
   else{
            this.setState({negation:this.state.negation+v})
            this.setState({staticn:v})
            this.setState({staticp:null})
   }
    }
    alerting = () => {
        this.setState({counts:this.state.counts+1})
    }
    render() { 
        return ( <div>
                    <div className="header">
                        <h2>Expense Tracker</h2>
                        <Entry valeval={this.decide} signalshoot={this.alerting}/>
                        <Total neg={this.state.negation} pos={this.state.position}/>
                        {console.log(`test ${this.state.staticp}`)}
                        <History psignal={this.state.staticp} nsignal={this.state.staticn} deliver={this.state.counts}/>
                    </div>
                </div> );
    }
}
 
export default Main;