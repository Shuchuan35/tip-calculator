import React, { Component } from 'react';
import BillBox from './components/BillBox';
import Tip from './components/Tip';
import NumberOfPeoplle from './components/NumberOfPeople';
import BillTotal from './components/BillTotal';
// import './App.css';

class App extends Component {
  state = {
    bill: 0,
    tip: 15,
    numberOfPeople: 1
  }

  onBillChange = e => {
    // console.log(e.target.value);
    this.setState({ bill: e.target.value });
    // console.log(this.state.bill);
  }

  onTipChange = e => {
    this.setState({ tip: e.target.value });
  }

  onNumberOfPeopleChange = e => {
    const num = e.target.value < 1 ? 1 : e.target.value;
    this.setState({ numberOfPeople: num });
  }

  render() {
    const { numberOfPeople } = this.state;
    const tipAmount = Number.parseFloat(this.state.bill) * Number.parseInt(this.state.tip) / 100;
    const tip = numberOfPeople === 1 ? tipAmount.toFixed(2) : (tipAmount / Number.parseInt(numberOfPeople)).toFixed(2);
    const billTotal = Number.parseFloat(this.state.bill) + Number.parseFloat(tipAmount);
    const bill = numberOfPeople === 1 ? billTotal.toFixed(2) : (billTotal/Number.parseInt(numberOfPeople)).toFixed(2);
    // console.log(billTotal);
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <BillBox onBillChange={this.onBillChange} />
        <Tip
          tip={this.state.tip} 
          onTipChange={this.onTipChange}
        />
        <NumberOfPeoplle
          people={numberOfPeople}
          onNumberOfPeopleChange={this.onNumberOfPeopleChange}
        />
        <BillTotal
          tip={tip}
          numberOfPeople={numberOfPeople}
          billTotal={bill}
        />
      </div>
    );
  }
}

export default App;
