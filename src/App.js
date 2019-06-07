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
    numberOfPeople: 1
  }

  onBillChange = e => {
    const billAmount = !e.target.value ? 0 : e.target.value;
    this.setState({ bill: billAmount });
  }

  onTipChange = e => {
    // restrict the user input for tip between 0 - 100 %
    const tipPercent = e.target.value <= 0 ? 0 : e.target.value >= 100 ? 100 : e.target.value;
    this.setState({ tip: tipPercent });
  }

  onNumberOfPeopleChange = e => {
    // restrict the user input for split between 1 - 100 people
    const num = e.target.value <= 1 ? 1 : e.target.value >= 100 ? 100 : e.target.value;

    this.setState({ 
      numberOfPeople: num
    });
  }

  percentUpClick = e => {
    e.preventDefault();
    let counter = this.state.tip;
    counter++;
    counter = counter >= 100 ? 100 : counter;
    this.setState({ tip: counter });
  }

  percentDownClick = e => {
    e.preventDefault();
    let counter = this.state.tip;
    counter--;
    counter = counter <=0 ? 0 : counter;
    this.setState({ tip: counter });
  }

  numberUpClick = e => {
    e.preventDefault();
    let counter = this.state.numberOfPeople;
    counter++;
    counter = counter >= 100 ? 100 : counter;
    this.setState({ numberOfPeople: counter });
  }

  numberDnClick = e => {
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
          percentUpClick={this.percentUpClick}
          percentDownClick={this.percentDownClick}
        />
        <NumberOfPeoplle
          numberOfPeople={numberOfPeople}
          onNumberOfPeopleChange={this.onNumberOfPeopleChange}
          handleNumUpClick={this.numberUpClick}
          handleNumDnClick={this.numberDnClick}
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
