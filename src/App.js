import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo"
import coins from "./coins.json";




//Javascript Functions

//Shuffles the cards
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

//Declares Constants
const counter = 0;
const chosenCoin = [];
const topScore = 0;
shuffleArray(coins);

//Main Class - React
class App extends Component {

  state = {
    coins,
    counter,
    topScore
    
  };


  // handleIncrement = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // handleReset= () => {
  //   this.setState({ counter: 0 });
  // };

  shuffleCard = id => {
    shuffleArray(coins);
    // const coins = this.state.coins.filter(coin => coin.id !== id);
    // this.setState({ coins });
  };

  addChosenCoin = id => {
    //always shuffle cards
    shuffleArray(coins);
    
    //lose condition
    if(chosenCoin.includes(id)){
      //reset if wrong
      this.setState({ counter: 0 })
      console.log(chosenCoin.includes(id))
      
      //add to top score
      if(this.state.topScore < this.state.counter){
      this.setState({topScore: this.state.counter })
      }
    } else {
      //continue playing condition
      this.setState({ counter: this.state.counter + 1 });
      chosenCoin.push(id);
      console.log(chosenCoin)
    }
    
  }


  render() {
    return (

      <Wrapper>
        <Header />
        <Jumbo><div className="score">Score: {this.state.counter} | Top Score: {this.state.topScore}</div></Jumbo>

        {this.state.coins.map(coin => (
          <Card
            shuffleCard={this.shuffleCard}
            // shuffleArray={this.shuffleArray}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            addChosenCoin={this.addChosenCoin}
            id={coin.id}
            key={coin.id}
            name={coin.name}
            image={coin.image}
            chosen={coin.chosen}
            opt2={coin.opt2}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
