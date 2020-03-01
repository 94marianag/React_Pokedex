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

  onChange = (e) => {
    const name = e.target.value
    this.setState({name})
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
              <Pokedex pokemons = {this.state.pokemons}/>
            </Route>

            <Route path="/profile" >
            <Profile pokemons = {this.state.pokemons}
                      onChange={this.onChange}
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
