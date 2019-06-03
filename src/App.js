import React , { Component }from 'react';
import InputBox from './components/InputBox';
import Tip from './components/Tip';
import BillTotal from './components/BillTotal';
// import './App.css';

class App extends Component {
  state = {
    bill: 0,
    tip: 10
  }

  onBillChange = e => {
    // console.log(e.target.value);
    this.setState({ bill: e.target.value })
    // console.log(this.state.bill);
  }

  onTipChange = e => {
    this.setState({ tip: e.target.value});
  }

  render() {
    const tipAmount =  Number.parseFloat(this.state.bill) * Number.parseInt(this.state.tip)/100;
    const billTotal = Number.parseFloat(this.state.bill) + tipAmount;
    console.log(billTotal);
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <InputBox onBillChange={this.onBillChange} />
        <Tip tip={this.state.tip} onTipChange={this.onTipChange} />
        <BillTotal 
          tip={tipAmount} 
          billTotal={billTotal}
        />
      </div>
    );
  }
}

export default App;
