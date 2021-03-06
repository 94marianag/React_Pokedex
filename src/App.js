import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import {Row, Col, Container} from "reactstrap";
import { } from 'react-router-dom';
import Menu from "./components/Menu";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Pokedex from "./components/Pokedex";

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      pokemons: []
    }
  }
  catchPokemon = (pokemon) =>{
    this.state.pokemons.push(pokemon)
    this.setState({
      pokemons: this.state.pokemons
    })
  }

  deletePokemon = (pokemon) =>{
    var index = pokemon.index;
    this.state.pokemons.splice(index,1);
    this.setState({
      pokemons: this.state.pokemons
    })    
  }
  
  render(){
    return <Router >
      <Menu />
      <Container id="rout">
      <Row>
        <Col md="2" ></Col>
        <Col md="8">
          <Switch>
            <Route path="/pokedex">
              <Pokedex pokemons = {this.state.pokemons}
              deletePokemon={this.deletePokemon}/>
            </Route>

            <Route path="/profile" >
            <Profile pokemons = {this.state.pokemons}
                      //deletePokemon={this.deletePokemon}
             />
            </Route>

            <Route path="/" >
            <Search catchPokemon= {this.catchPokemon}/>
            </Route>
          </Switch>
      </Col>
      <Col md="2"></Col>
      </Row>
      </Container>
    </Router>
  }

}

export default App;
