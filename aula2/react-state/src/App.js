import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    text: 'Número de clicks 0',
    title: 'Meu titulo',
    numberOfClicks: [0]
  }

  handleClickButton() {
    const lastIndex = this.state.numberOfClicks.length - 1;
    const lastValue = this.state.numberOfClicks[lastIndex];
    
    this.setState({
      numberOfClicks: [...this.state.numberOfClicks, lastValue + 1]
    });
  }

  render() {
    return (
      <div>

        <div>
          <button onClick={() => this.handleClickButton()} >Mudar State</button>
        </div>

        {this.state.numberOfClicks.map(function(click) {
          return <p>{`Número de clicks ${click}`}</p>
        })}
      </div>
    );
  }
}

export default App;