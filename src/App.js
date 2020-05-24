import React, { Component } from 'react';

class App extends Component {
  state = {
    active: false,
  }

  handleBtn = () => {
    this.setState({
      active: !this.state.active,
    })
  }


  render() {
    let btn = {
      border: '2px solid black',
      padding: '10px 20px',
      fontFamily: 'arial',
      fontSize: '30px',
      display: 'block',
      margin: '20px auto',
      backgroundColor: 'white',
    }

    if (this.state.active) {
      btn.backgroundColor = 'cadetblue';
      btn.color = 'white';
    }

    return (
      <button style={btn} onClick={this.handleBtn}> {this.state.active ? 'Włącz' : 'Wyłącz'}</button >
    );
  }
}

export default App;