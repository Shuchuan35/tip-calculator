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
    this.setState({ bill: e.target.value });
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
  }

  handleNumUpClick = e => {
    e.preventDefault();
    let counter = this.state.numberOfPeople;
    counter++;
    counter = counter >= 100 ? 100 : counter;
    this.setState({ numberOfPeople: counter });
  }

  handleNumDnClick = e => {
    e.preventDefault();
    let counter = this.state.numberOfPeople;
    counter--;
    counter = counter <=1 ? 1 : counter;
    this.setState({ numberOfPeople: counter });
  }

  render() {
    const { bill, tip, numberOfPeople } = this.state;
    let tipAmount = Number.parseFloat(bill) * Number.parseInt(tip) / 100;
    let billTotal = Number.parseFloat(bill) + Number.parseFloat(tipAmount);
    let isBillSplit = false;
    
    if (numberOfPeople !== 1) {
      tipAmount = tipAmount / Number.parseInt(numberOfPeople);
      billTotal = billTotal / Number.parseInt(numberOfPeople);
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
          handleNumUpClick={this.handleNumUpClick}
          handleNumDnClick={this.handleNumDnClick}
        />
        <BillTotal
          tip={tipAmount.toFixed(2)}
          isSplit={isBillSplit}
          billTotal={billTotal.toFixed(2)}
        />
      </div>
    );
  }
}

export default App;
