import React, { Component } from 'react';
import Bill from './components/Bill';
import Tip from './components/Tip';
import NumberOfPeoplle from './components/NumberOfPeople';
import BillTotal from './components/BillTotal';
import './App.css';

class App extends Component {
  state = {
    bill: 0,
    tip: 15,
    numberOfPeople: 1,
    isSplit: false
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
    const num = e.target.value <= 1 ? 1 : e.target.value;

    this.setState({ 
      numberOfPeople: num, 
      isSplit: num === 1 ? false : true
    });
    // console.log(this.state.isSplit);
  }

  render() {
    const { bill, tip, numberOfPeople } = this.state;
    // const tipAmount = Number.parseFloat(this.state.bill) * Number.parseInt(this.state.tip) / 100;
    // const tip = numberOfPeople === 1 ? tipAmount.toFixed(2) : (tipAmount / Number.parseInt(numberOfPeople)).toFixed(2);
    // const billTotal = Number.parseFloat(this.state.bill) + Number.parseFloat(tipAmount);
    // const bill = numberOfPeople === 1 ? billTotal.toFixed(2) : (billTotal / Number.parseInt(numberOfPeople)).toFixed(2);
    let tipAmount = Number.parseFloat(bill) * Number.parseInt(tip) / 100;
    let billTotal = Number.parseFloat(bill) + Number.parseFloat(tipAmount);
    let isBillSplit = false;
    // console.log(numberOfPeople);
    if (numberOfPeople !== 1) {
      tipAmount = (tipAmount / Number.parseInt(numberOfPeople)).toFixed(2);
      billTotal = (billTotal / Number.parseInt(numberOfPeople)).toFixed(2);
      isBillSplit = true;
    }

    return (
      <div className="App">
        <h2>Tip Calculator</h2>
        <Bill
          onBillChange={this.onBillChange}
        />
        <Tip
          tip={tip}
          onTipChange={this.onTipChange}
        />
        <NumberOfPeoplle
          numberOfPeople={numberOfPeople}
          onNumberOfPeopleChange={this.onNumberOfPeopleChange}
        />
        <BillTotal
          tip={tipAmount}
          isSplit={isBillSplit}
          billTotal={billTotal}
        />
      </div>
    );
  }
}

export default App;
